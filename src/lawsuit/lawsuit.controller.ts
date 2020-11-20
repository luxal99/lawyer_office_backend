import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { GenericController } from '../generic/generic.controller';
import { Lawsuit } from './lawsuit.entity';
import { LawsuitService } from './lawsuit.service';
import { Response } from 'express';

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
