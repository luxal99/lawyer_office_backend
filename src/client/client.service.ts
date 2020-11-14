import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Client } from './client.entity';
import { ClientRepository } from '../repository/client.repository';

@Injectable()
export class ClientService extends GenericService<Client> {

  constructor(private readonly repository: ClientRepository) {
    super(repository, []);
  }
}
