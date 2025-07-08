
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