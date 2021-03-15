import { Column, Entity } from 'typeorm';
import { Base } from '../generic/base.entity';

@Entity()
export class UserInfo extends Base {

  @Column({ nullable: false })
  fullName: string;

  @Column({ nullable: false })
  email: string;


  constructor(fullName?: string, email?: string) {
    super();
    this.fullName = fullName;
    this.email = email;
  }
}
