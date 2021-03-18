import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Case } from './case.entity';
import { CaseRepository } from '../repository/case.repository';

@Injectable()
export class CaseService extends GenericService<Case> {


  constructor(private readonly repository: CaseRepository) {
    super(repository, ['idClient', 'listOfLawsuits', 'listOfLawsuits.idCase', 'idClient.listOfCases']);
  }

  async getLastThreeCases(): Promise<Case[]> {
    const listOfCases: Case[] = await this.findAll();
    return listOfCases.reverse().splice(0, 3);
  }

  async getAnalytics() {
    return await this.repository.query('select status,COUNT(id) as value from `case` group by status order by status\n');
  }

  async findBasic() {
   return this.findAll().then((listOfCases)=>{
     return listOfCases.map(item => ({
       title: item.title,
     }));
   })
  }
}

