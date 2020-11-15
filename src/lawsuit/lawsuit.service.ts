import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Lawsuit } from './lawsuit.entity';
import { LawsuitRepository } from '../repository/lawsuit.repository';

@Injectable()
export class LawsuitService extends GenericService<Lawsuit> {

  constructor(private readonly repository: LawsuitRepository) {
    super(repository, ['id_case']);
  }

  async getNextThreeLawsuit(): Promise<Lawsuit[]> {
    const listOfLawsuits: Lawsuit[] = await this.findAll();

    listOfLawsuits.sort((a, b) => {
      const c: any = new Date(a.date);
      const d: any = new Date(b.date);
      return d-c;
    });

    return listOfLawsuits;
  }
}
