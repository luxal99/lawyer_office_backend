import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const axios = require('axios');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);

}

bootstrap().then(async () => {
  //await axios.get('http://localhost:8080/notification/generate');
});

