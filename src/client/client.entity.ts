import { Base } from '../generic/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Case } from '../case/case.entity';


@Entity()
export class Client extends Base {

  @Column({ nullable: false })
  full_name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  telephone: string;

  @OneToMany(type => Case, listOfCases => listOfCases.id_client,)
  listOfCases: Case[];

  constructor(full_name?: string, email?: string, telephone?: string) {
    super();
    this.full_name = full_name;
    this.email = email;
    this.telephone = telephone;
  }
}
