import { EntityRepository, Repository } from 'typeorm';
import { Lawsuit } from '../lawsuit/lawsuit.entity';

@EntityRepository(Lawsuit)
export class LawsuitRepository extends Repository<Lawsuit> {

}
