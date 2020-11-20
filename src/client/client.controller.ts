import { Controller } from '@nestjs/common';
import { GenericController } from '../generic/generic.controller';
import { Client } from './client.entity';
import { ClientService } from './client.service';
import { Case } from '../case/case.entity'
import { CaseService } from '../case/case.service';

@Controller('client')
export class ClientController extends GenericController<Client,Case>{

  constructor(private readonly service:ClientService) {
    super(service);
  }
}
