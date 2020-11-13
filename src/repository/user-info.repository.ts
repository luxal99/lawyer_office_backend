import {EntityRepository, Repository} from "typeorm";
import {UserInfo} from "../user-info/user-info.entity";

@EntityRepository(UserInfo)
export class UserInfoRepository extends Repository<UserInfo> {

}
