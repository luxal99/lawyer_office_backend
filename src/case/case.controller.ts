import { Controller, Delete, Get, HttpService, HttpStatus, Inject, Param, Res } from '@nestjs/common';
import { GenericController } from '../generic/generic.controller';
import { Case } from './case.entity';
import { CaseService } from './case.service';
import { Response } from 'express';
import { LawsuitService } from '../lawsuit/lawsuit.service';
import { Lawsuit } from '../lawsuit/lawsuit.entity';

@Controller('case')
export class CaseController extends GenericController<Case> {


  @Inject()
  private httpService: HttpService;

  @Inject()
  private lawsuitService: LawsuitService;

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

  @Get('/analytics')
  async getCaseAnalytics(@Res() res: Response) {
    try {
      res.send(await this.service.getAnalytics());
    } catch (e) {
      res.sendStatus(HttpStatus.BAD_GATEWAY);
    }
  }


}
