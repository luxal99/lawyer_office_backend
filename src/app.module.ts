import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfoModule } from './user-info/user-info.module';
import { ClientModule } from './client/client.module';
import { CaseModule } from './case/case.module';
import { LawsuitModule } from './lawsuit/lawsuit.module';
import { NotificationModule } from './notification/notification.module';
import { NotesModule } from './notes/notes.module';
import { ConfigModule } from '@nestjs/config';
import * as constant from './constants/const';
import { JWTMiddle } from './middleware/verify.middle';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      'type': 'mysql',
      'host': 'localhost',
      'port': 3306,
      'username': constant.DB_USERNAME,
      'password': constant.DB_PASSWORD,
      'database': constant.DB_NAME,
      'synchronize': true,
      'logging': false,
      'entities': constant.LIST_OF_ENTITIES,
    }), UserModule, ClientModule, CaseModule, UserInfoModule, LawsuitModule, NotificationModule, NotesModule, ConfigModule.forRoot({
      isGlobal: true,
    })],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(JWTMiddle).forRoutes(constant.CASE_ROUTE, constant.CLIENT_ROUTE, constant.LAWSUIT_ROUTE, constant.NOTES_ROUTE);
  }
}
