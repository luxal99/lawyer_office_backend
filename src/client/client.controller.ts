import { Controller } from '@nestjs/common';
import { GenericController } from '../generic/generic.controller';
import { Client } from './client.entity';
import { ClientService } from './client.service';
import { Constant } from '../constants/const';

@Controller(Constant.CLIENT_ROUTE)
export class ClientController extends GenericController<Client>{

  constructor(private readonly service:ClientService) {
    super(service);
  }
}
