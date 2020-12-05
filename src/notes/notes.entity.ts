import { Column, Entity } from 'typeorm';
import { Base } from '../generic/base.entity';

@Entity()
export class Notes extends Base {

  @Column({ nullable: false })
  date: Date;

  @Column({default:'01/01/2020'})
  date_formatted: string;

  @Column({ length: 10240 })
  note: string;

}
