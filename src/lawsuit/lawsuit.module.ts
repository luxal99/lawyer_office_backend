import { Module } from '@nestjs/common';
import { LawsuitController } from './lawsuit.controller';
import { LawsuitService } from './lawsuit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LawsuitRepository } from '../repository/lawsuit.repository';
import { NotificationRepository } from '../repository/notification.repository';
import { NotificationService } from '../notification/notification.service';
import { UserInfoRepository } from '../repository/user-info.repository';
import { UserInfoService } from '../user-info/user-info.service';
import { UserRepository } from '../repository/user.repository';
import { UserService } from '../user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([LawsuitRepository, NotificationRepository, UserInfoRepository, UserRepository])],
  controllers: [LawsuitController],
  providers: [LawsuitService, NotificationService, UserInfoService, UserService],
})
export class LawsuitModule {
}
