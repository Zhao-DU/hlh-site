// express core
import express from "express";
import App from './app';

// express middleware
import * as bodyParser from 'body-parser';

// controllers
import userController from './controllers/userController';
import HomeController from "./controllers/homeController";

// database/tests 
import { connect } from './database/database';
import * as db_tests from './tests/database_tests';

// constants declaration 
export const EXPRESS_PORT: number = 3001;
export const URI: string = 'localhost';
export const DB_URI: string = 'mongodb://localhost:27017/hlh'

// db_tests.testConnection();
// db_tests.createTestData();
// db_tests.testCustomMethods();
// db_tests.deleteTestData();


const app = new App({
  host: URI,
  port: 5000,
  controllers: [
    new HomeController(),
    new userController()
  ],
  middleWares: [
      express.json(),
      express.urlencoded({ extended: true })
  ]
});


// app.get('/', (req,res) => res.send('Express + TypeScript Server'));

app.listen();