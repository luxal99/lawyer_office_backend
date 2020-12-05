import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Notes } from './notes.entity';
import { NotesRepository } from '../repository/notes.repository';

@Injectable()
export class NotesService extends GenericService<Notes> {

  constructor(genericRepository: NotesRepository) {
    super(genericRepository, []);
  }
}
