import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Case } from './case.entity';
import { CaseRepository } from '../repository/case.repository';

@Injectable()
export class CaseService extends GenericService<Case>{


  constructor(private readonly repository: CaseRepository) {
    super(repository,['id_client','listOfLawsuits','id_client.listOfCases']);
  }
}

