import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Notification } from './notification.entity';
import { NotificationRepository } from '../repository/notification.repository';

@Injectable()
export class NotificationService extends GenericService<Notification> {

  constructor(repository: NotificationRepository) {
    super(repository, []);
  }
}
