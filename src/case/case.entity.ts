import { Base } from '../generic/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Client } from '../client/client.entity';
import { Lawsuit } from '../lawsuit/lawsuit.entity';

@Entity()
export class Case extends Base {


  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  creationDate: Date;

  @Column({ default: '01/01/2020' })
  creationDateFormatted: string;

  @Column({ length: 10240, nullable: true })
  note: string;

  @Column({ default: true })
  status: boolean;

  @ManyToOne(type => Client, idClient => idClient.listOfCases, { onDelete: 'CASCADE' })
  @JoinColumn()
  idClient: Client;

  @OneToMany(type => Lawsuit, listOfLawsuits => listOfLawsuits.idCase)
  listOfLawsuits: Lawsuit[];

  constructor(creation_date: Date, note: string, id_client: Client) {
    super();
    this.creationDate = creation_date;
    this.note = note;
    this.idClient = id_client;


  }
}
