import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientRepository } from '../repository/client.repository';
import { CaseRepository } from '../repository/case.repository';
import { CaseService } from '../case/case.service';
import { LawsuitRepository } from '../repository/lawsuit.repository';
import { LawsuitService } from '../lawsuit/lawsuit.service';
import { NotificationService } from '../notification/notification.service';
import { NotificationRepository } from '../repository/notification.repository';
import { UserRepository } from '../repository/user.repository';
import { UserService } from '../user/user.service';
import { UserInfoRepository } from '../repository/user-info.repository';
import { UserInfoService } from '../user-info/user-info.service';

@Module({
  imports:[TypeOrmModule.forFeature([ClientRepository,CaseRepository,LawsuitRepository,NotificationRepository,UserRepository,UserInfoRepository])],
  controllers: [ClientController],
  providers: [ClientService,CaseService,LawsuitService,NotificationService,UserService,UserInfoService]
})
export class ClientModule {}
