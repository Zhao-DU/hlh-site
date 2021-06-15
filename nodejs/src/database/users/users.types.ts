// store the types we’ll use in the other files

import { AnyARecord } from "dns";
import { Document, Model } from "mongoose";

// define an interface containing the same fields as the schema. 
// We’ll also want to extend this as part of two more interfaces:
// IUserDocument — which includes our fields, plus the other elements of a standard Mongoose Document
// IUserModel — which represents a standard Mongoose Model, containing documents of our IUserDocument type.


export interface IUser {
  firstName: string;
  lastName: string;
  age: number;
  dateOfEntry?: Date;
  lastUpdated?: Date;
}

export interface IUserDocument extends IUser, Document {
  setLastUpdated: (this: IUserDocument) => Promise<void>;
  sameLastName: (this: IUserDocument) => Promise<Document[]>;
}

export interface IUserModel extends Model<IUserDocument> {
  findOneOrCreate: (
    this: IUserModel,
    {
      firstName,
      lastName,
      age,
    }: { firstName: string; lastName: string; age: number }
  ) => Promise<IUserDocument>;
  findByAge: (
    this: IUserModel,
    min?: number,
    max?: number
  ) => Promise<IUserDocument[]>;
}