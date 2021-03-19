import { Base } from '../generic/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Case } from '../case/case.entity';
import { ApiProperty } from '@nestjs/swagger';


@Entity()
export class Client extends Base {

  @ApiProperty()
  @Column({ nullable: false })
  fullName: string;

  @ApiProperty()
  @Column({ nullable: false })
  email: string;

  @ApiProperty()
  @Column({ nullable: false })
  telephone: string;

  @ApiProperty()
  @OneToMany(type => Case, listOfCases => listOfCases.idClient)
  listOfCases: Case[];

  constructor(full_name?: string, email?: string, telephone?: string) {
    super();
    this.fullName = full_name;
    this.email = email;
    this.telephone = telephone;
  }
}
