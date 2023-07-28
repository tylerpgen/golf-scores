import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Get the MongoDB connection URI from the environment variables
const uri = process.env.MONGODB_URI;

// Function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database using the provided URI
    const conn = await mongoose.connect(uri);

    // If the connection is successful, log the message with the connected host
    console.log(`MongoDB Connected ${conn.connection.host}`);
  } catch (error) {
    // If an error occurs during the connection attempt, log the error message
    console.error(`Error: ${error.message}`);

    // Exit the Node.js process with a non-zero exit code (1) to indicate failure
    process.exit(1);
  }
};

export default connectDB;
