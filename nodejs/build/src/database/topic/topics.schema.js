"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Create a Schema corresponding to the document interface.
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    dateOfEntry: {
        type: Date,
        default: new Date()
    },
    lastUpdated: {
        type: Date,
        default: new Date()
    }
});
exports.default = UserSchema;
