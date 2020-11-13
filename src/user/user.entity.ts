import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn } from 'typeorm';
import { UserInfo } from '../user-info/user-info.entity';

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToOne(type => UserInfo)
  @JoinColumn()
  id_user_info: UserInfo;

  constructor(username?: string, password?: string,userInfo?:UserInfo) {
    super();
    this.username = username;
    this.password = password;
    this.id_user_info = userInfo
  }
}
