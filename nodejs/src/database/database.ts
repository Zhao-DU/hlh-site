import Mongoose from "mongoose";
import { DB_URI } from '../server';

let database: Mongoose.Connection;

export const connect = () => {
  
  if (database) {
    return;
  }

  Mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  database = Mongoose.connection;

  database.once("open", async () => {
    console.log("Connected to database");
  });

  database.on("error", () => {
    console.log("Error connecting to database");
  });

};

export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};