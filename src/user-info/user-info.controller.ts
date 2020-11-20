import { Controller } from '@nestjs/common';
import { GenericController } from '../generic/generic.controller';
import { UserInfo } from './user-info.entity';
import { UserInfoService } from './user-info.service';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';

@Controller('userInfo')
export class UserInfoController extends GenericController<UserInfo, User> {
  constructor(private readonly service: UserInfoService) {
    super(service);
  }
}
