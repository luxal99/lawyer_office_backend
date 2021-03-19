import { Column, Entity } from 'typeorm';
import { Base } from '../generic/base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class UserInfo extends Base {

  @ApiProperty()
  @Column({ nullable: false })
  fullName: string;

  @ApiProperty()
  @Column({ nullable: false })
  email: string;


  constructor(fullName?: string, email?: string) {
    super();
    this.fullName = fullName;
    this.email = email;
  }
}
