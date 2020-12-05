import { EntityRepository, Repository } from 'typeorm';
import { Notes } from '../notes/notes.entity';

@EntityRepository(Notes)
export class NotesRepository extends Repository<Notes> {

}
