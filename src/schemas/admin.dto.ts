import {Schema} from 'mongoose';

export class createAdminDTO{
    email: string;
    password: string;
}

export const AdminSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{timestamps: true}).loadClass(createAdminDTO)