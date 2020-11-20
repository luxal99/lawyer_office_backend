import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfoRepository } from '../repository/user-info.repository';
import { UserService } from '../user/user.service';
import { UserController } from '../user/user.controller';
import { UserInfoController } from './user-info.controller';
import { UserInfoService } from './user-info.service';
import { UserRepository } from '../repository/user.repository';

@Module({
  imports:[TypeOrmModule.forFeature([UserInfoRepository,UserRepository])],
  controllers:[UserInfoController],
  providers:[UserInfoService,UserService]
})
export class UserInfoModule {}
