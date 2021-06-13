"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
// constants declaration 
const URL = 'localhost';
const EXPRESS_PORT = 3001;
const MONGODB_PORT = 27017;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(EXPRESS_PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${EXPRESS_PORT}`);
});
