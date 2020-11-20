import { Controller, Delete, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { GenericController } from '../generic/generic.controller';
import { Lawsuit } from './lawsuit.entity';
import { LawsuitService } from './lawsuit.service';
import { Response } from 'express';
import { Notification } from '../notification/notification.entity';
import { NotificationService } from '../notification/notification.service';

@Controller('lawsuit')
export class LawsuitController extends GenericController<Lawsuit> {


  constructor(private readonly service: LawsuitService) {
    super(service);
  }

  @Get('nextThreeLawsuit')
  async getNextThreeLawsuit(@Res() res: Response) {
    try {
      res.send(await this.service.getNextThreeLawsuit());
    } catch (e) {
      res.sendStatus(HttpStatus.BAD_GATEWAY);
    }
  }

}
