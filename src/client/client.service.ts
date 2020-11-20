import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Client } from './client.entity';
import { ClientRepository } from '../repository/client.repository';
import { CaseRepository } from '../repository/case.repository';
import { Case } from '../case/case.entity';

@Injectable()
export class ClientService extends GenericService<Client, Case> {

  constructor(private readonly repository: ClientRepository, private caseRepository: CaseRepository) {
    super(repository, caseRepository, ['listOfCases']);
  }
}
