import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected to Database");
    return client.db();
  } catch (e) {
    console.log(e);
  }
};

export { connectToDatabase };
