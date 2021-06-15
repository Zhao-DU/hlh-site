"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_URI = exports.URI = void 0;
const express_1 = __importDefault(require("express"));
const database_1 = require("./database/database");
const app = express_1.default();
// constants declaration 
const EXPRESS_PORT = 3001;
exports.URI = 'localhost';
exports.DB_URI = 'mongodb://localhost:27017/hlh';
database_1.connect();
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(EXPRESS_PORT, () => {
    console.log(`⚡️[server]: Server is running at https://${exports.URI}:${EXPRESS_PORT}`);
});
