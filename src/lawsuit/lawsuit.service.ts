import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Lawsuit } from './lawsuit.entity';
import { LawsuitRepository } from '../repository/lawsuit.repository';

@Injectable()
export class LawsuitService extends GenericService<Lawsuit> {

  constructor(private readonly repository: LawsuitRepository) {
    super(repository, ['idCase', 'idCase.listOfLawsuits', 'idCase.idClient', 'idCase.idClient.listOfCases']);
  }

  async getNextThreeLawsuit(): Promise<Lawsuit[]> {
    return (await this.findAll()).filter(x => x.date > new Date()).sort((a, b) => {
      const c: any = new Date(a.date),
        d: any = new Date(b.date);
      return c - d;
    }).splice(0, 3);
  }

  async getLawsuitForCurrentMonth(): Promise<Lawsuit[]> {
    const listOfLawsuits: Array<Lawsuit> = await this.findAll();
    return listOfLawsuits.filter(x => x.date.getMonth() === new Date().getMonth() && x.date > new Date()).sort((a, b) => {
      const c: any = new Date(a.date),
        d: any = new Date(b.date);
      return c - d;
    });
  }

  async getLawsuitFromPeriod(startDate: Date, endDate: Date): Promise<Lawsuit[]> {
    const listOfLawsuit = await this.findAll();
    return listOfLawsuit.filter(x => x.date >= new Date(startDate) && x.date <= new Date(endDate));
  }

  async getLawsuitForDate(forwardedDate: Date): Promise<Lawsuit[]> {
    const listOfLawsuits: Array<Lawsuit> = await this.findAll();

    return listOfLawsuits.filter(x => (x.date.getDate() === forwardedDate.getDate())
      && (x.date.getMonth() === forwardedDate.getMonth()) && (x.date.getFullYear() === forwardedDate.getFullYear()));
  }
}
