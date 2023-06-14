import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Database");
    return mongoose.connection;
  } catch (error) {
    console.log("Failed to connect to the database:", error);
    process.exit(1);
  }
};

export { connectToDatabase };
