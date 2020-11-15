import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Case } from './case.entity';
import { CaseRepository } from '../repository/case.repository';

@Injectable()
export class CaseService extends GenericService<Case> {


  constructor(private readonly repository: CaseRepository) {
    super(repository, ['id_client', 'listOfLawsuits', 'listOfLawsuits.id_case', 'id_client.listOfCases']);
  }

  async getLastThreeCases(): Promise<Case[]> {
    const listOfCases: Case[] = await this.findAll();


    return listOfCases.reverse().splice(0, 3);

  }
}

