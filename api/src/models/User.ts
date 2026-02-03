import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  password: string;
  role: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'user' },
});

export const User = mongoose.model<IUser>('User', userSchema);
