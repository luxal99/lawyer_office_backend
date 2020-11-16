import { Controller, Get, HttpStatus, Inject, Res } from '@nestjs/common';
import { GenericController } from '../generic/generic.controller';
import { Notification } from './notification.entity';
import { NotificationService } from './notification.service';
import { LawsuitService } from '../lawsuit/lawsuit.service';
import { Lawsuit } from '../lawsuit/lawsuit.entity';
import { Response } from 'express';

@Controller('notification')
export class NotificationController extends GenericController<Notification> {

  constructor(private service: NotificationService) {
    super(service);
  }

  @Get('/generate')
  async generateNotification(@Res() res: Response) {
    try {
      this.service.scheduledNotification().then(() => {
        res.sendStatus(HttpStatus.OK);
      });
    } catch (e) {
      res.sendStatus(HttpStatus.BAD_GATEWAY);
    }

  }
}
