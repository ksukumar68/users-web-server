import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { User } from 'src/interfaces/user.interface';
import { createUserDTO } from 'src/schemas/user.dto';

@Injectable()
export class UserService {

    constructor(@InjectModel('users') private userModel: Model<User>){

    }

    //creating new users    
    async createUser(user: createUserDTO): Promise<User>{
        const newUser = await new this.userModel(user);
        return await newUser.save();
    }

    //deleteing user using ObjectId
    async deleteUser(userId: ObjectId){
        const userData = await this.userModel.findOne({"_id": userId}).exec()
        if(!userData){
            return {
                status: false, message: "No such user exists"
            }
        }
        const resData =  await this.userModel.deleteOne({"_id": userId}).exec();
        return {
            data: resData, status: true
        };
    }

    //fetching all users list
    async getAllUser(): Promise<User[]>{
        const userList =  await this.userModel.find({}).exec();
        return userList;
    }

    //updating user data
    async updateUser(userId: ObjectId, updatedUser: User){
        const userData = await this.userModel.findOne({"_id": userId}).exec()
        if(!userData){
            return {
                status: false, message: "No such user exists"
            }
        }
        const newUser = await this.userModel.findOneAndUpdate(userId,updatedUser, {new: true});
        return {
            data: newUser, status: true
        };
    }

}
