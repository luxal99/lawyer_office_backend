import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { LawsuitService } from '../lawsuit/lawsuit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationRepository } from '../repository/notification.repository';
import { LawsuitRepository } from '../repository/lawsuit.repository';

@Module({
  imports:[TypeOrmModule.forFeature([NotificationRepository,LawsuitRepository])],
  controllers: [NotificationController],
  providers: [NotificationService,LawsuitService]
})
export class NotificationModule {}
