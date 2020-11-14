import { Base } from '../generic/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Client } from '../client/client.entity';

@Entity()
export class Case extends Base {

  @Column({ nullable: false })
  creation_date: Date;

  @Column({ length: 10240 })
  note: string;

  @Column({ default: true })
  status: boolean;

  @ManyToOne(type => Client, id => id.listOfCases)
  id_client: Client;

}
