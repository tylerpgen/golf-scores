import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;

// Function to connect to the MongoDB database
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // If an error occurs, exit the Node.js process with a non-zero exit code
  }
};

export default connectDB;
