import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn } from 'typeorm';
import { UserInfo } from '../user-info/user-info.entity';
import { ApiProperty } from '@nestjs/swagger';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

@Entity()
export class User extends BaseEntity {


  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ unique: true })
  username: string;

  @ApiProperty()
  @Column()
  password: string;

  @ApiProperty()
  @OneToOne(type => UserInfo)
  @JoinColumn()
  idUserInfo: UserInfo;

  constructor(username?: string, password?: string, userInfo?: UserInfo) {
    super();
    this.username = username;
    this.password = password;
    this.idUserInfo = userInfo;
  }
}
