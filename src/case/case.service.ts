import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Case } from './case.entity';
import { CaseRepository } from '../repository/case.repository';
import { LawsuitService } from '../lawsuit/lawsuit.service';
import { LawsuitRepository } from '../repository/lawsuit.repository';
import { Lawsuit } from '../lawsuit/lawsuit.entity';

@Injectable()
export class CaseService extends GenericService<Case,Lawsuit> {


  constructor(private readonly repository: CaseRepository,private readonly lawsuitRepository:LawsuitRepository) {
    super(repository, lawsuitRepository,['id_client', 'listOfLawsuits', 'listOfLawsuits.id_case', 'id_client.listOfCases']);
  }

  async getLastThreeCases(): Promise<Case[]> {
    const listOfCases: Case[] = await this.findAll();
    return listOfCases.reverse().splice(0, 3);
  }

  async getAnalytics() {
    return await this.repository.query('select status,COUNT(id) as value from `case` group by status\n');
  }
}

