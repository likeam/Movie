import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Scuessfully Connecte to MongooseDB");
  } catch (error) {
    console.log("Eror Not connect to MongooseDb", error);
  }
};

export default connectDB;
