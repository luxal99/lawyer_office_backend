import { Controller } from '@nestjs/common';
import { GenericController } from '../generic/generic.controller';
import { Client } from './client.entity';
import { ClientService } from './client.service';
import { CLIENT_ROUTE } from '../constants/const';

@Controller(CLIENT_ROUTE)
export class ClientController extends GenericController<Client>{

  constructor(private readonly service:ClientService) {
    super(service);
  }
}
