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


connect();
db_tests.runTests();

const app = new App({
  host: URI,
  port: EXPRESS_PORT,
  controllers: [
    new HomeController(),
    new userController()
  ],
  middleWares: [
      express.json(),
      express.urlencoded({ extended: true })
  ]
});

app.listen();