import express from "express";
import { connect } from './database/database';


const app = express();

// constants declaration 
const EXPRESS_PORT: number = 3001;
export const URI: string = 'localhost';
export const DB_URI: string = 'mongodb://localhost:27017/hlh'

connect();


app.get('/', (req,res) => res.send('Express + TypeScript Server'));
app.listen(EXPRESS_PORT, () => {
  console.log(`⚡️[server]: Server is running at https://${URI}:${EXPRESS_PORT}`);
});