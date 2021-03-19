import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Base } from '../generic/base.entity';
import { Case } from '../case/case.entity';
import { Notification } from '../notification/notification.entity';
import { ApiBody, ApiExtraModels, ApiProperty } from '@nestjs/swagger';

@Entity()
export class Lawsuit extends Base {

  @Column({ nullable: false })
  date: Date;

  @ApiProperty()
  @Column({ default: '01/01/2020' })
  dateFormatted: string;

  @ApiProperty()
  @Column({ length: 10240 })
  note: string;


  @ApiProperty({ type: () => Case })
  @ManyToOne(type => Case, idCase => idCase.listOfLawsuits, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  idCase: Case;

  @ApiProperty()
  @OneToMany(type => Notification, listOfNotification => listOfNotification.idLawsuit, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  listOfNotification: Notification[];

  constructor(date?: Date, note?: string) {
    super();
    this.date = date;
    this.note = note;
  }
}
