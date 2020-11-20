import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { UserInfo } from './user-info.entity';
import { UserInfoRepository } from '../repository/user-info.repository';
import { User } from '../user/user.entity';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserInfoService extends GenericService<UserInfo> {


  constructor(private readonly repository: UserInfoRepository, private readonly userRepository: UserRepository) {
    super(repository, []);
  }
}
