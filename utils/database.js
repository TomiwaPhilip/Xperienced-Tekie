import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return;
    }

    console.log("connecting to mongo...");
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "user_path",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error; // Rethrow the error to handle it at a higher level if needed.
  }
};

export default dbConnect;
