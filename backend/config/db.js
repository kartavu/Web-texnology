import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');
    return true;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

export default connectDB;