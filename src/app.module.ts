import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserInfoModule } from './user-info/user-info.module';
import { UserInfo } from './user-info/user-info.entity';
import { ClientModule } from './client/client.module';
import { CaseModule } from './case/case.module';
import { Client } from './client/client.entity';
import { Case } from './case/case.entity';
import { LawsuitModule } from './lawsuit/lawsuit.module';
import { NotificationModule } from './notification/notification.module';
import { Lawsuit } from './lawsuit/lawsuit.entity';
import { Notification } from './notification/notification.entity';
import { NotificationService } from './notification/notification.service';
import { NotificationRepository } from './repository/notification.repository';
import { LawsuitRepository } from './repository/lawsuit.repository';
import { LawsuitService } from './lawsuit/lawsuit.service';

@Module({
  imports: [TypeOrmModule.forFeature([NotificationRepository,LawsuitRepository]),TypeOrmModule.forRoot({
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
      Client,
      Case,
      Notification,
      Lawsuit,
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
  }), UserModule,ClientModule, CaseModule, UserInfoModule, LawsuitModule, NotificationModule],
  providers: [AppService, NotificationService,LawsuitService],
})
export class AppModule {
}
