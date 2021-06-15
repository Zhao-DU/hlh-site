// 2. Create a Schema corresponding to the document interface.
import { Schema, SchemaTypeOptions } from "mongoose";

// import custom defined methods/types
import { findOneOrCreate, findByAge } from "./users.statics";
import { setLastUpdated, sameLastName } from "./users.methods";
import { IUserDocument, IUserModel } from "./users.types";


const UserSchema = new Schema<IUserDocument, IUserModel>({
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

// Define static methods

UserSchema.statics.findOneOrCreate = findOneOrCreate;
UserSchema.statics.findByAge = findByAge;

// Define object methods 
UserSchema.methods.setLastUpdated = setLastUpdated;
UserSchema.methods.sameLastName = sameLastName;

export default UserSchema;