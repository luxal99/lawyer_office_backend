import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from '../generic/base.entity';

@Entity()
export class UserInfo extends Base {
  @Column({ nullable: false })
  full_name: string;

  @Column({ nullable: false })
  email: string;


  constructor(full_name?: string, email?: string) {
    super();
    this.full_name = full_name;
    this.email = email;
  }
}
