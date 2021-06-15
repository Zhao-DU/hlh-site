import Mongoose from "mongoose";
import { DB_URI } from '../server';
import { UserModel } from "../database/users/users.model";
import { connect, disconnect } from "../database/database"

let database: Mongoose.Connection;

export const testConnection = () => {

    database = Mongoose.connection;

    console.log("In test method of DB");

    database.once("open", async () => {
      console.log("Moongose is indeed a singleton return by import");
    });

};

export const createTestData = async () => {
  connect();
  const users = [
    { firstName: "Emma", lastName: "Bradley", age: 34 },
    { firstName: "Elise", lastName: "Conner", age: 62 },
    { firstName: "Jack", lastName: "Lawson", age: 20 },
    { firstName: "Oliver", lastName: "Moss", age: 80 },
    { firstName: "Jamie", lastName: "Reid", age: 52 },
    { firstName: "Aidan", lastName: "Bradley", age: 73 },
    { firstName: "Jordan", lastName: "Gallagher", age: 27 },
    { firstName: "Erin", lastName: "Miles", age: 23 },
    { firstName: "William", lastName: "May", age: 39 },
    { firstName: "Ethan", lastName: "Butler", age: 68 },
  ];
  try {
    for (const user of users) {
      await UserModel.create(user);
      console.log(`Created user ${user.firstName} ${user.lastName}`);
    }
    disconnect();
  } catch (e) {
    console.error(e);
  }
};

export const deleteTestData = async () => {
    connect();
    try {
        await UserModel.deleteMany({});
        console.log(`Deleted all users`);
        disconnect();
    } catch (e) {
      console.error(e);
    }
  };

export const testCustomMethods = async () => {
    connect();
    // test static methods
    const twenties = await UserModel.findByAge(20, 29);
    const newUser = await UserModel.findOneOrCreate({
      firstName: "Mike",
      lastName: "Smith",
      age: 57,
    });
    const existingUser = await UserModel.findOneOrCreate({
      firstName: "Emma",
      lastName: "Bradley",
      age: 34,
    });
    const numOfUsers = (await UserModel.find()).length;
    console.log({ twenties, newUser, existingUser, numOfUsers });
    // test instance methods
    await existingUser.setLastUpdated();
    const siblings = await existingUser.sameLastName();
    console.log({ siblings });
    disconnect();
  };