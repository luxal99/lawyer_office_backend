import { Inject, Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Notification } from './notification.entity';
import { NotificationRepository } from '../repository/notification.repository';
import { Lawsuit } from '../lawsuit/lawsuit.entity';
import { LawsuitService } from '../lawsuit/lawsuit.service';
import { CronJob } from 'cron';
import * as nodemailer from 'nodemailer';
import { UserInfoService } from '../user-info/user-info.service';


@Injectable()
export class NotificationService extends GenericService<Notification> {

  @Inject()
  private lawsuitService: LawsuitService;

  @Inject()
  private userInfoService: UserInfoService;

  constructor(private repository: NotificationRepository) {
    super(repository, []);
  }

  protected async generateNotification(): Promise<void> {
    const listOfLawsuits: Lawsuit[] = await this.lawsuitService.findAll();

    for (const lawsuit of listOfLawsuits) {
      const diffDays = Math.ceil((lawsuit.date.getTime() - new Date().getTime()) / (1000 * 3600 * 24));

      if (diffDays <= 5 && diffDays > 0) {
        const text = `Ročište vezano za predmet '${lawsuit.id_case.title}' je za ${diffDays} dana`;
        await this.repository.save(new Notification(lawsuit, text)).then(async () => {
          await this.sendMail(text);
        }).catch((err) => {
          throw new Error(err);
        });
      }

    }
  }

  async findMails(): Promise<string[]> {
    return Array.from(await this.userInfoService.findAll(), mail => mail.email);
  }

  async sendMail(mailText: string) {

    const transporter =
      nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: 'lukicaleksa04@gmail.com',
          pass: '*145#7890=',
        },
      });

    transporter.verify(function(error) {
      if (error) {
        console.log(error);
      } else {
        console.log('Server is ready to take our messages');
      }
    });

    const mailOptions = {
      from: 'lukicaleksa04@gmail.com',
      to: await this.findMails(),
      subject: 'Obaveštenje o skorašnjem ročištu',
      text: mailText,
    };

    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(`error: ${error}`);
      }
      console.log(`Message Sent ${info.response}`);
    });
  }

  async scheduledNotification() {
    new CronJob('* 7 * * *', async () => {
      await this.generateNotification();
    }, null, true, 'Europe/Belgrade').start();
  }
}
