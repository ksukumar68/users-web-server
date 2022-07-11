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
        return newUser.save();
    }

    //deleteing user using ObjectId
    async deleteUser(userId: ObjectId){
        const resData =  await this.userModel.deleteOne({"_id": userId}).exec();
        return resData;
    }

    //fetching all users list
    async getAllUser(): Promise<User[]>{
        const userList =  await this.userModel.find({}).exec();
        return userList;
    }

    //updating user data
    async updateUser(userId: ObjectId, updatedUser: User){
        const newUser = await this.userModel.updateOne(userId,updatedUser, {new: true});
        return newUser;
    }

}
