// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: [
      'http://localhost:3000', // local React dev
      'https://taskmanagement-no94.onrender.com', // your deployed frontend
    ],
    credentials: true, // allow cookies/auth headers if needed
  });
  await app.listen(4000);
}
bootstrap();
