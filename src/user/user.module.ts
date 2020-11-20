import { HttpModule, Module } from '@nestjs/common';
import {UserController} from './user.controller';
import {UserService} from "./user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserRepository} from "../repository/user.repository";
import { UserInfoRepository } from '../repository/user-info.repository';
import { UserInfoService } from '../user-info/user-info.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository,UserInfoRepository]),HttpModule],
  controllers: [UserController],
  providers: [UserService,UserInfoService]
})
export class UserModule {
}
