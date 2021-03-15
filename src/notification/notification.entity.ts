import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Base } from '../generic/base.entity';
import { Lawsuit } from '../lawsuit/lawsuit.entity';

@Entity()
export class Notification extends Base {

  @Column({ length: 10240, charset: 'utf8' })
  note: string;

  @ManyToOne(type => Lawsuit, id_lawsuit => id_lawsuit.listOfNotification, { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  idLawsuit: Lawsuit;


  constructor(idLawsuit?: Lawsuit, note?: string) {
    super();
    this.note = note;
    this.idLawsuit = idLawsuit;
  }
}
