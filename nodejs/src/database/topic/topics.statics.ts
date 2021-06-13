import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Topic {
  title: string;
  content: string;
}

// 2. Create a Schema corresponding to the document interface.
const topicSchema = new Schema<Topic>({
    title: { type: String, required: true },
    content: { type: String, required: true },
  });

export default topicSchema;