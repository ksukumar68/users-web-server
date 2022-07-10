import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { User } from 'src/interfaces/user.interface';
import { createUserDTO } from 'src/schemas/user.dto';
import { UserService } from './user.service';

@Controller('api')
export class UserController {
    constructor(private readonly userService: UserService){

    }

    @Post('/addUser')
    addUser(@Body() user: createUserDTO): Promise<User>{
        const newUser = this.userService.createUser(user);
        return newUser;
    }

    @Delete('/deleteUser/:id')
    deleteUser(@Param() params){
        const newUser = this.userService.deleteUser(params.id);
        return newUser;
    }

    @Get('/getUser')
    getAllUser(): Promise<User[]>{
        const userList = this.userService.getAllUser();
        return userList;
    }

    @Patch('/updateUser/:id')
    updateUser(@Param('id') params, @Body() updatedUser: User){
        const userList = this.userService.updateUser(params.id, updatedUser);
        return userList;
    }
}
