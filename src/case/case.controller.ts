import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { GenericController } from '../generic/generic.controller';
import { Case } from './case.entity';
import { CaseService } from './case.service';
import { Response } from 'express';

@Controller('case')
export class CaseController extends GenericController<Case> {
  constructor(private readonly service: CaseService) {
    super(service);
  }

  @Get('/lastThree')
  async getLastThreeCases(@Res() res: Response) {
    try {
      res.send(await this.service.getLastThreeCases());
    } catch (e) {
      res.sendStatus(HttpStatus.BAD_GATEWAY);
    }
  }
}
