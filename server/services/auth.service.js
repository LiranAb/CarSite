// Import DAL (Data Access Layer) modules
import { authDal } from "../dal/auth.dal.js";
import { userDal } from "../dal/user.dal.js";

// Import utility functions
import { hashPassword, verifyPassword } from "../utils/hashPassword.js";
import { createToken } from "../utils/token.js";

/**
 * Authentication Service
 * Handles user registration and login functionality
 */
export const authService = {
    /**
     * Register a new user and generate authentication token
     * @returns {Object} Registration result with token
     * @param userData
     */
    registerUser: async (userData) => {
        try {
 
            // Hash the password before storing
            delete userData.confirmPassword;
            const registerUserData = {
                ...userData,
                password: await hashPassword(userData.password),
            };
            console.log('Final password hash before save:', registerUserData.password);

            // Register the user in the database
            const user = await authDal.registerUser(registerUserData);

            console.log('Service: User registered successfully', user);
            console.log('Service: Creating Token');

            // Generate authentication token
            const token = await createToken({
                userId: user._id,
                email: user.email,
            }, { expiresIn: '1d' });

            console.log('Service: Token created successfully', token);


            const registeredUser = user.toObject();
            delete registeredUser.password;

            return {
                success: true,
                user: registeredUser,
                token: token,
            };
        } catch (e) {
            throw e;
        }
    },

    /**
     * Authenticate a user by email and password
     * @param {string} email - User's email
     * @param {string} password - User's password
     * @returns {Object} Login result with user data and token
     */
    logUser: async (email, password) => {
        try {
            console.log('Service: Started logging in user', email, password);

            // Get user by email
            const user = await userDal.getUserByEmail(email, true);

            // Validate user exists and password is provided
            if (!user || !password) {
                const error = new Error('סליחה, משתמש לא קיים או סיסמה לא נכונה');
                error.status = 401; // Unauthorized
                throw error;
            }

            console.log('Hashed password from DB:', user.password);
            console.log('Service: User fetched from database', user);

            // Verify password matches
            let isPasswordValid = false;
            try {
                isPasswordValid = await verifyPassword(password, user.password);
            } catch (err) {
                // אם יש בעיה בהשוואת סיסמה (למשל user.password לא קיים), החזר שגיאת התחברות
                const error = new Error('סליחה, משתמש לא קיים או סיסמה לא נכונה');
                error.status = 401;
                throw error;
            }

            if (!isPasswordValid) {
                console.log('Service: Invalid password for user', email);
                const error = new Error('סליחה, משתמש לא קיים או סיסמה לא נכונה');
                error.status = 401; // Unauthorized
                throw error;
            }

            // Generate authentication token
            const token = await createToken(
                { userId: user._id, email: user.email },
                { expiresIn: '1d' }
            );
            console.log('Service: Token generated successfully', token);

            // Convert user to plain object and remove password
            let userObj;
            if (typeof user.toObject === 'function') {
                userObj = user.toObject();
            } else {
                userObj = { ...user };
            }
            if (userObj.password !== undefined) {
                delete userObj.password;
            }

            console.log('User found', userObj);
            // Return successful login response
            return {
                success: true,
                token: token,
                user: userObj
            };
        } catch (e) {
            // ודא שתמיד מוחזר סטטוס נכון לשגיאות התחברות
            if (e.status === 401) {
                throw e;
            }
            // שגיאות אחרות - החזר שגיאת שרת כללית
            console.error('Auth Service Error:', e);
            const error = new Error('שגיאת שרת פנימית');
            error.status = 500;
            throw error;
        }
    }
};
