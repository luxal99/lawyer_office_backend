import { Injectable } from '@nestjs/common';
import { GenericService } from '../generic/generic.service';
import { UserInfo } from './user-info.entity';
import { UserInfoRepository } from '../repository/user-info.repository';

@Injectable()
export class UserInfoService extends GenericService<UserInfo> {


  constructor(private readonly repository: UserInfoRepository) {
    super(repository, []);
  }
}
