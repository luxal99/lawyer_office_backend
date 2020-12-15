import { Controller, Get, HttpStatus, Req, Res } from '@nestjs/common';
import { GenericController } from '../generic/generic.controller';
import { Notes } from './notes.entity';
import { NotesService } from './notes.service';
import { Request, Response } from 'express';
import { NOTES_ROUTE } from '../constants/const';

@Controller(NOTES_ROUTE)
export class NotesController extends GenericController<Notes> {

  constructor(private service: NotesService) {
    super(service);
  }

  @Get('/getByDate')
  async getByDate(@Req() req: Request, @Res() res: Response) {
    try {
      res.send(await this.service.getNotesForDate(new Date(JSON.stringify(req.query.date))));
    } catch (e) {
      res.sendStatus(HttpStatus.BAD_GATEWAY);
    }
  }
}
