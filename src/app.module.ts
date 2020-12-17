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
import { JWTMiddle } from './middleware/verify.middle';
import { ConstModule } from './constants/const.module';
import { Constant } from './constants/const';

@Module({
  imports: [ConfigModule.forRoot({

    isGlobal: true,
  }),
    TypeOrmModule.forRoot({
      'type': 'mysql',
      'host': 'localhost',
      'port': 3306,
      'username': process.env.DB_USERNAME,
      'password': process.env.DB_PASSWORD,
      'database': process.env.DB_NAME,
      'synchronize': true,
      'logging': false,
      'entities': Constant.LIST_OF_ENTITIES,
    }), UserModule, ConstModule, ClientModule, CaseModule, UserInfoModule, LawsuitModule, NotificationModule, NotesModule],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(JWTMiddle).forRoutes(Constant.CASE_ROUTE, Constant.CLIENT_ROUTE, Constant.LAWSUIT_ROUTE, Constant.NOTES_ROUTE);
  }
}
