import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { User } from 'src/interfaces/user.interface';
import { createUserDTO } from 'src/schemas/user.dto';

@Injectable()
export class UserService {

    constructor(@InjectModel('users') private userModel: Model<User>){

    }

    createUser(user: createUserDTO): Promise<User>{
        const newUser = new this.userModel(user);
        return newUser.save();
    }

    deleteUser(userId: ObjectId){
        const newUser =  this.userModel.deleteOne({"_id": userId}).exec();
        return newUser;
    }

    getAllUser(): Promise<User[]>{
        const userList =  this.userModel.find({}).exec();
        return userList;
    }

    updateUser(userId: ObjectId, updatedUser: User){
        const newUser = this.userModel.updateOne(userId,updatedUser);
        return newUser;
    }

}
