import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { Notes } from './notes.entity';
import { NotesRepository } from '../repository/notes.repository';

@Injectable()
export class NotesService extends GenericService<Notes> {

  constructor(private repository: NotesRepository) {
    super(repository, []);
  }

  async getNotesForDate(forwardedDate: Date): Promise<Notes[]> {
    const listOfNotes: Array<Notes> = await this.findAll();

    return listOfNotes.filter(x => (x.date.getDate() === forwardedDate.getDate())
      && (x.date.getMonth() === forwardedDate.getMonth()) && (x.date.getFullYear() === forwardedDate.getFullYear()));
  }}
