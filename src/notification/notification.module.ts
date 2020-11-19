import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { LawsuitService } from '../lawsuit/lawsuit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationRepository } from '../repository/notification.repository';
import { LawsuitRepository } from '../repository/lawsuit.repository';
import { UserInfoRepository } from '../repository/user-info.repository';
import { UserInfoService } from '../user-info/user-info.service';

@Module({
  imports:[TypeOrmModule.forFeature([NotificationRepository,LawsuitRepository,UserInfoRepository])],
  controllers: [NotificationController],
  providers: [NotificationService,LawsuitService,UserInfoService]
})
export class NotificationModule {}
