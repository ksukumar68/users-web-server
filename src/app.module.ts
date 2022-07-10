import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './controllers/user/user.module';
import { AdminModule } from './controllers/admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from './config'

@Module({
  imports: [MongooseModule.forRoot(config.mongoUri), UserModule, AdminModule],
  controllers: [AppController, ],
  providers: [AppService],
})
export class AppModule {}
