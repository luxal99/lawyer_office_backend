
import { User } from './user.entity';
import { Inject, Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class UserService {

  @Inject()
  private manager: EntityManager;

  async save(entity: User) {
    try {
      await this.manager.save(entity)
    } catch (e) {
      throw new Error('');
    }
  }

  findByUsername(username: string): Promise<User> {
    return User.findOne({ where: { username: username } });
  }
}
