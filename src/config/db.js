import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_ATLAS_URI);
        console.log('Database connected successfully');
    }catch (error) {
        console.log('MongoDB Atlas connection error:', error);
    }
}

export default connectDB;