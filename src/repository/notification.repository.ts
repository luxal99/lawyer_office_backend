import { EntityRepository, Repository } from 'typeorm';
import { Notification } from '../notification/notification.entity';

@EntityRepository(Notification)
export class NotificationRepository extends Repository<Notification> {

}
