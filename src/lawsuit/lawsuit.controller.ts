import { Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { GenericController } from '../generic/generic.controller';
import { Lawsuit } from './lawsuit.entity';
import { LawsuitService } from './lawsuit.service';
import { Request, Response } from 'express';

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

  @Get('/lawsuitForCurrentMonth')
  async getLawsuitForCurrentMonth(@Res() res: Response) {
    try {
      res.send(await this.service.getLawsuitForCurrentMonth());
    } catch (e) {
      res.sendStatus(HttpStatus.BAD_GATEWAY);
    }
  }

  @Post('/period')
  async getLawsuitsFromPeriod(@Req() req: Request, @Res() res: Response) {

    console.log(req.body);
    try {
      res.send(await this.service.getLawsuitFromPeriod(req.body.startDate, req.body.endDate));
    } catch (e) {
      res.sendStatus(HttpStatus.BAD_GATEWAY);
    }
  }

}
