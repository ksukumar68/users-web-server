import { Body, Controller, Delete, Get, Param, Patch, Post, Res, HttpStatus, HttpException } from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';
import { createUserDTO } from 'src/schemas/user.dto';
import { UserService } from './user.service';

@Controller('api')
export class UserController {
    constructor(private readonly userService: UserService){

    }

    @Post('/addUser')
    async addUser(@Res() response, @Body() user: createUserDTO): Promise<User>{
        const newUser = await this.userService.createUser(user);
        return response.status(HttpStatus.OK).json({
            data: newUser, status: true
        })
    }

    @Delete('/deleteUser/:id')
    async deleteUser(@Res() response, @Param() params){
        const deletedAcknowledgement = await this.userService.deleteUser(params.id);
        return response.status(HttpStatus.OK).send(deletedAcknowledgement)
    }

    @Get('/getUser')
    async getAllUser(@Res() response): Promise<User[]>{
        const userList = await this.userService.getAllUser();
        return response.status(HttpStatus.OK).json({
            data: userList, status: true
        })
    }

    @Patch('/updateUser/:id')
    async updateUser(@Res() response, @Param('id') params, @Body() updatedUser: User){
        const updatedUserData = await this.userService.updateUser(params.id, updatedUser);
        return response.status(HttpStatus.OK).send(updatedUserData)
    }
}
