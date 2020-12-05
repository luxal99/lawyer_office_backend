import { Controller } from '@nestjs/common';
import { GenericController } from '../generic/generic.controller';
import { Notes } from './notes.entity';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController extends GenericController<Notes> {

  constructor(genericService: NotesService) {
    super(genericService);
  }
}
