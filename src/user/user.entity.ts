import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn } from 'typeorm';
import { UserInfo } from '../user-info/user-info.entity';

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

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
