import { Base } from '../generic/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Client } from '../client/client.entity';
import { Lawsuit } from '../lawsuit/lawsuit.entity';
import { ApiProperty } from '@nestjs/swagger';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

@Entity()
export class Case extends Base {


  @ApiProperty()
  @Column({ nullable: false })
  title: string;

  @ApiProperty()
  @Column({ nullable: false })
  creationDate: Date;

  @ApiProperty()
  @Column({ default: '01/01/2020' })
  creationDateFormatted: string;

  @ApiProperty()
  @Column({ length: 10240, nullable: true })
  note: string;

  @ApiProperty()
  @Column({ default: true })
  status: boolean;

  @ApiProperty({ type: () => Client })
  @ManyToOne(type => Client, idClient => idClient.listOfCases, { onDelete: 'CASCADE' })
  @JoinColumn()
  idClient: Client;

  @ApiProperty()
  @OneToMany(type => Lawsuit, listOfLawsuits => listOfLawsuits.idCase)
  listOfLawsuits: Lawsuit[];

  constructor(creation_date: Date, note: string, id_client: Client) {
    super();
    this.creationDate = creation_date;
    this.note = note;
    this.idClient = id_client;


  }
}
