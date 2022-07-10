import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './controllers/user/user.module';
import { AdminModule } from './controllers/admin/admin.module';


@Module({
  imports: [UserModule, AdminModule],
  controllers: [AppController, ],
  providers: [AppService],
})
export class AppModule {}
