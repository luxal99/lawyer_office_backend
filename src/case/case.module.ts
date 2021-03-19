import { HttpModule, Module } from '@nestjs/common';
import { CaseController } from './case.controller';
import { CaseService } from './case.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaseRepository } from '../repository/case.repository';
import { LawsuitRepository } from '../repository/lawsuit.repository';
import { LawsuitService } from '../lawsuit/lawsuit.service';
import { NotificationRepository } from '../repository/notification.repository';
import { NotificationService } from '../notification/notification.service';
import { ClientRepository } from '../repository/client.repository';
import { UserRepository } from '../repository/user.repository';
import { UserInfoRepository } from '../repository/user-info.repository';
import { ClientService } from '../client/client.service';
import { UserService } from '../user/user.service';
import { UserInfoService } from '../user-info/user-info.service';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([
    ClientRepository, CaseRepository, LawsuitRepository,
    NotificationRepository, UserRepository, UserInfoRepository])],
  controllers: [CaseController],
  providers: [ClientService, CaseService, LawsuitService, NotificationService, UserService, UserInfoService],
})
export class CaseModule {
}
