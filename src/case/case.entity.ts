import { Base } from '../generic/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Client } from '../client/client.entity';
import { Lawsuit } from '../lawsuit/lawsuit.entity';

@Entity()
export class Case extends Base {


  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  creation_date: Date;

  @Column({ default: '01/01/2020' })
  creation_date_formatted: string;

  @Column({ length: 10240, nullable: true })
  note: string;

  @Column({ default: true })
  status: boolean;

  @ManyToOne(type => Client, id_client => id_client.listOfCases, { onDelete: 'CASCADE' })
  @JoinColumn()
  id_client: Client;

  @OneToMany(type => Lawsuit, listOfLawsuits => listOfLawsuits.id_case)
  listOfLawsuits: Lawsuit[];

  constructor(creation_date: Date, note: string, id_client: Client) {
    super();
    this.creation_date = creation_date;
    this.note = note;
    this.id_client = id_client;


  }
}
