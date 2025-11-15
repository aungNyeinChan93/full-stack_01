/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-floating-promises */


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  // app
  const app = await NestFactory.create(AppModule);

  // cors
  app.enableCors();

  // global prefix
  app.setGlobalPrefix('api/v1')

  // listen
  await app.listen(process.env.PORT ?? 3001);

}
bootstrap();
