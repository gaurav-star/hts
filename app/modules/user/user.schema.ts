import mongoose, { model } from 'mongoose';
import { IUserSignUp } from './user.types';

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

type IUserDocument = Document & IUserSignUp;

const UserModel = model<IUserDocument>("User", userSchema);

export default UserModel;