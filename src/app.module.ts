import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserInfoModule } from './user-info/user-info.module';
import { UserInfo } from './user-info/user-info.entity';
import { ClientModule } from './client/client.module';
import { CaseModule } from './case/case.module';
import { Client } from './client/client.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    'type': 'mysql',
    'host': 'localhost',
    'port': 3306,
    'username': 'root',
    'password': 'Luxal.99',
    'database': 'lawyer_office',
    'synchronize': true,
    'logging': false,
    'entities': [
      User,
      UserInfo,
      Client
    ],
    'migrations': [
      'src/migration/**/*.ts',
    ],
    'subscribers': [
      'src/subscriber/**/*.ts',
    ],
    'cli': {
      'entitiesDir': 'src/entity',
      'migrationsDir': 'src/migration',
      'subscribersDir': 'src/subscriber',
    },
  }),UserModule, ClientModule, CaseModule, UserInfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
