import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Base } from '../generic/base.entity';
import { Case } from '../case/case.entity';
import { Notification } from '../notification/notification.entity';

@Entity()
export class Lawsuit extends Base {

  @Column({ nullable: false })
  date: Date;

  @Column({default:'01/01/2020'})
  date_formatted: string;

  @Column({ length: 10240 })
  note: string;

  @ManyToOne(type => Case,id_case=>id_case.listOfLawsuits)
  id_case:Case

  @OneToMany(type => Notification, listOfNotification=>listOfNotification.id_lawsuit)
  listOfNotification:Notification[]

  constructor(date?: Date, note?: string) {
    super();
    this.date = date;
    this.note = note;
  }
}
