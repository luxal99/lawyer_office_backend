import { Column, Entity } from 'typeorm';
import { Base } from '../generic/base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Notes extends Base {

  @ApiProperty()
  @Column({ nullable: false })
  date: Date;

  @ApiProperty()
  @Column({ length: 10240 })
  note: string;

}
