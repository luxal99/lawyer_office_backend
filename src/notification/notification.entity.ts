import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Base } from '../generic/base.entity';
import { Lawsuit } from '../lawsuit/lawsuit.entity';

@Entity()
export class Notification extends Base {

  @Column({ length: 10240 })
  note: string;

  @OneToOne(() => Lawsuit)
  @JoinColumn()
  id_lawsuit: Lawsuit;


}
