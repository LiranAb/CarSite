
import User from '../models/user.model.js';


export const authDal = {
    registerUser: async (processedUserData) => {
        try {
            const validUser = new User(processedUserData);
            console.log('DAL: Started registering user', validUser);
            await validUser.save();
            console.log('DAL: User registered successfully', validUser);
            return validUser;
        } catch(e) {
            throw e;
        }
    }

}

export const logUser = async (email, password) => {
    try {
        console.log('DAL: Started logging in user', email, password);
        const user = await User.findOne({
            email: email,
        }).select('+password')
    } catch (e) {
        console.error('DAL: Error during user login', e);
        throw e;
    }
}