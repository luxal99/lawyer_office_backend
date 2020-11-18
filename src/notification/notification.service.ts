import { Inject, Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Notification } from './notification.entity';
import { NotificationRepository } from '../repository/notification.repository';
import { Lawsuit } from '../lawsuit/lawsuit.entity';
import { LawsuitService } from '../lawsuit/lawsuit.service';
import { CronJob } from 'cron';

@Injectable()
export class NotificationService extends GenericService<Notification> {

  @Inject()
  private lawsuitService: LawsuitService;

  constructor(private repository: NotificationRepository) {
    super(repository, []);
  }

  protected async generateNotification(): Promise<void> {
    const listOfLawsuits: Lawsuit[] = await this.lawsuitService.findAll();

    for (const lawsuit of listOfLawsuits) {
      const diffDays = Math.ceil((lawsuit.date.getTime() - new Date().getTime()) / (1000 * 3600 * 24));

      if (diffDays <= 5) {
        await this.repository.save(new Notification(lawsuit, `Ročište vezano za predmet '${lawsuit.id_case.title}' je za ${diffDays} dana`)).catch((err) => {
          console.log(err);
        });
      }

    }
  }

  async scheduledNotification() {
    new CronJob('* * * * * *', () => {
      this.generateNotification();
    }, null, true, 'Europe/Belgrade').start();
  }
}
