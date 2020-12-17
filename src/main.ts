import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Constant } from './constants/const';
const axios = require('axios');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);

}

bootstrap().then(async () => {
  await axios.get('http://localhost:8080/notification/generate');
});

