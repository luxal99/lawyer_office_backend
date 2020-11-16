import { Controller, Inject } from '@nestjs/common';
import { GenericController } from '../generic/generic.controller';
import { Notification } from './notification.entity';
import { NotificationService } from './notification.service';
import { LawsuitService } from '../lawsuit/lawsuit.service';

@Controller('notification')
export class NotificationController extends GenericController<Notification> {

  @Inject()
  private lawsuitService: LawsuitService;

  constructor(service: NotificationService) {
    super(service);
  }
  //
  // generateNotification(): Promise<void> {
  // }
}
