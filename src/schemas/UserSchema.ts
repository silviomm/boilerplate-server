import { Schema, Model, model, Document } from "mongoose";

export interface IUser extends Document {
    name: string,
    email: string,
    createdAt: Date;
}

const userSchema: Schema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    createdAt: { type: Date, required: true }
});

userSchema.pre('save', (next) => {
    let now = new Date();
    if (!this.createdAt) {
        this.createdAt = now;
    }
    next();
});

export const UserDb: Model<IUser> = model<IUser>('User', userSchema);