import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Lawsuit } from './lawsuit.entity';
import { LawsuitRepository } from '../repository/lawsuit.repository';

@Injectable()
export class LawsuitService extends GenericService<Lawsuit> {

  constructor(private readonly repository: LawsuitRepository) {
    super(repository, ['id_case', 'id_case.listOfLawsuits', 'id_case.id_client']);
  }

  async getNextThreeLawsuit(): Promise<Lawsuit[]> {
    return (await this.findAll()).filter(x => x.date > new Date()).sort((a, b) => {
      const c: any = new Date(a.date),
        d: any = new Date(b.date);
      return c - d;
    }).splice(0, 3);
  }
}
