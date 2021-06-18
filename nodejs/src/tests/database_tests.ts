import Mongoose from "mongoose";
import { DB_URI } from '../server';
import { UserModel } from "../database/users/users.model";

let database: Mongoose.Connection;

export const runTests = async () => {
  try { 
    await testConnection();
    await createTestData();
    // await testCustomMethods();
    // await deleteTestData();
  } catch (err){
    console.log(err);
  }
};


export const testConnection = async () => {

    database = Mongoose.connection;

    console.log("In test method of DB");

    database.once("open", async () => {
      console.log("Moongose is indeed a singleton return by import");
    });

};

export const createTestData = async () => {
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
  } catch (e) {
    console.error(e);
  }
};

export const deleteTestData = async () => {
    try {
        await UserModel.deleteMany({});
        console.log(`Deleted all users`);
    } catch (e) {
      console.error(e);
    }
  };

export const testCustomMethods = async () => {
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
  };