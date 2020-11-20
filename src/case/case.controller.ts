import { Controller, Delete, Get, HttpService, HttpStatus, Inject, Param, Res } from '@nestjs/common';
import { GenericController } from '../generic/generic.controller';
import { Case } from './case.entity';
import { CaseService } from './case.service';
import { Response } from 'express';
import { LawsuitService } from '../lawsuit/lawsuit.service';
import { Lawsuit } from '../lawsuit/lawsuit.entity';

@Controller('case')
export class CaseController extends GenericController<Case, Lawsuit> {



  @Inject()
  private httpService: HttpService;

  constructor(private readonly service: CaseService, private readonly lawsuitService: LawsuitService) {
    super(service);
  }


  @Delete('case/:id')
  async deleteCase(@Param('id')id: number, @Res() res: Response) {
    try {
      const ids = Array.from(await this.lawsuitService.findAll(), lawsuit => lawsuit).filter(x => x.id_case.id == id);
      await this.lawsuitService.deleteAll(Array.from(ids, lawsuit => lawsuit.id));

      await this.service.delete(id).then(() => {
        res.sendStatus(HttpStatus.OK);
      });

    } catch (e) {
      res.sendStatus(HttpStatus.BAD_GATEWAY);
    }
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

  @Delete('/softDelete/:id')
  async softDelete(@Res() res: Response, @Param('id') id: number) {
    try {
      await this.httpService.axiosRef.delete(`http://localhost:8080/notification/softDelete/`)
      await this.service.softDelete(id,['id_case']).then(() => {
        res.sendStatus(HttpStatus.OK);
      });
    } catch (e) {
      console.log(e);
      res.sendStatus(HttpStatus.BAD_GATEWAY);
    }
  }
}
