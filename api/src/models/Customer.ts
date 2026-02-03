import mongoose, { Document, Schema, Types } from 'mongoose';

export interface ICustomer extends Document {
  firstName: string;
  lastName: string;
  company?: Types.ObjectId;
}

const customerSchema = new Schema<ICustomer>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
});

export const Customer = mongoose.model<ICustomer>('Customer', customerSchema);
