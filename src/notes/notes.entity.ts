import { Column, Entity } from 'typeorm';
import { Base } from '../generic/base.entity';

@Entity()
export class Notes extends Base {

  @Column({ nullable: false })
  date: Date;

  @Column({ length: 10240 })
  note: string;

}
