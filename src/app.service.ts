import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { config } from './config';

@Injectable()
export class AppService {
  constructor(@InjectConnection() private connection: Connection){

  }
  getStatus(): string {
    return `${config.appName} is running in port ${config.port}. Connected to ${this.connection.name}`;
  }
}
