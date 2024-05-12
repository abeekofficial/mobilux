import mongoose, { ConnectOptions } from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGO_URI) {
    return console.error("MONGO_URI is not defined");
  }

  if (isConnected) {
    console.log("=> using existing connection database");
    return Promise.resolve();
  }

  try {
    const options: ConnectOptions = {
      dbName: "mobilux",
      autoCreate: true,
    };
    await mongoose.connect(process.env.MONGO_URI, options);

    isConnected = true;
  } catch (error) {
    console.log("=> failed to connect to database");
  }
};
