import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AuthController } from '../auth/auth.controller';
import { AuthService } from '../auth/auth.service';
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema } from '../../schemas/user.dto';

@Module({
  imports: [MongooseModule.forFeature([{name: "users", schema: UserSchema}])],
  controllers: [AdminController, AuthController],
  providers: [AdminService, AuthService]
})
export class AdminModule {}
