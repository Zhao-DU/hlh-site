// define the static methods of our model, functions which can be called on the model itself
import { IUserDocument, IUserModel} from "./users.types";
import { Model } from 'mongoose';

// Find user if it exists, else create the user
export async function findOneOrCreate(
  this: IUserModel,
  userId: string
): Promise<IUserDocument> {
  const record = await this.findOne({ userId });
  if (record) {
    return record;
  } else {
    return this.create({ userId });
  }
}

// Find a user by age
export async function findByAge(
  this: IUserModel,
  min?: number,
  max?: number
): Promise<IUserDocument[]> {
  return this.find({ age: { $gte: min || 0, $lte: max || Infinity } });
}
