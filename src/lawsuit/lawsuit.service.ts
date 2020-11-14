import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Lawsuit } from './lawsuit.entity';
import { LawsuitRepository } from '../repository/lawsuit.repository';

@Injectable()
export class LawsuitService extends GenericService<Lawsuit> {

  constructor(private readonly repository:LawsuitRepository) {
    super(repository, ['id_case']);
  }
}
