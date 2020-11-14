import { EntityRepository, Repository } from 'typeorm';
import { Case } from '../case/case.entity';

@EntityRepository(Case)
export class CaseRepository extends Repository<Case> {

}
