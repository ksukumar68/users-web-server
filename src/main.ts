import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config';
import { AllExceptionsFilter } from './handlers/interceptors/API-error.filter';

async function bootstrap() {
  const port = config.port;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(port, ()=>{
    console.log("App is running")
  });
}
bootstrap();
