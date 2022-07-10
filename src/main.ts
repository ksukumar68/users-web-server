import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config } from './config';
import { GlobalInterceptor } from './handlers/interceptors/global.interceptor';

async function bootstrap() {
  const port = config.port;
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new GlobalInterceptor())
  await app.listen(port, ()=>{
    console.log("App is running")
  });
}
bootstrap();
