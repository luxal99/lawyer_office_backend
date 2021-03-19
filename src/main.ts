import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Lawsuit } from './lawsuit/lawsuit.entity';
import { Notes } from './notes/notes.entity';
import { Notification } from './notification/notification.entity';
import { Base } from './generic/base.entity';


const axios = require('axios');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Lawyer office API')
    .setDescription('Here you can see controllers and models')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [Lawsuit, Notes, Notification, Base],
  });
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT);

}

bootstrap().then(async () => {
  await axios.get('http://localhost:8080/notification/generate');
});

