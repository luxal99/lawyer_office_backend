import { Controller } from '@nestjs/common';
import { GenericController } from '../generic/generic.controller';
import { UserInfo } from './user-info.entity';
import { UserInfoService } from './user-info.service';

@Controller('userInfo')
export class UserInfoController extends GenericController<UserInfo>{
  constructor(private readonly service: UserInfoService) {
    super(service);
  }
}
