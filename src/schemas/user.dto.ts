import {Schema} from 'mongoose';

export class createUserDTO{
    name: string;
    email: string;
    dob: number;
}

export const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dob: {
        type: Number,
        required: true
    }
},{timestamps: true}).loadClass(createUserDTO)