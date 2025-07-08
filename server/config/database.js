import mongoose from 'mongoose';

export const connectToDatabase = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);

        console.log('Connected to MongoDB successfully');

    }catch(err){
        console.error('MongoDB connection error:', err.message);
    }
}
