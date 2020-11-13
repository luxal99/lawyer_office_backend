import { GenericService } from './generic.service';
import { Body, Get, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';

export class GenericController<T> {

  constructor(private readonly genericService: GenericService<T>) {
  }

  @Post()
  async post(@Body() entity: T, @Res() res: Response) {
    const entityResponse = await this.genericService.save(entity);
    res.send(entityResponse)
  }

  @Get()
  async get(@Res() res: Response, @Req() req: Request) {
    res.send(await this.genericService.findAll());
  }

  @Get('/:id')
  async getById(@Res() res: Response, @Param('id') id: number) {
    try {
      res.send(await this.genericService.findOne(id));
    } catch (error) {
      res.sendStatus(HttpStatus.BAD_GATEWAY);
    }
  }
}
