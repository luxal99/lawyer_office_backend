import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfoRepository } from '../repository/user-info.repository';
import { UserService } from '../user/user.service';
import { UserController } from '../user/user.controller';
import { UserInfoController } from './user-info.controller';
import { UserInfoService } from './user-info.service';

@Module({
  imports:[TypeOrmModule.forFeature([UserInfoRepository])],
  controllers:[UserInfoController],
  providers:[UserInfoService]
})
export class UserInfoModule {}
