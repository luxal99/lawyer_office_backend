import { User } from './user.entity';
import { Inject, Injectable } from '@nestjs/common';
import { EntityManager, getConnection } from 'typeorm';

@Injectable()
export class UserService {

  @Inject()
  private manager: EntityManager;

  async save(entity: User): Promise<User> {
    try {
      return await this.manager.save(entity);
    } catch (e) {
      throw new Error('');
    }
  }

  async update(user: User) {
    try {
      await getConnection().createQueryBuilder().update(User).set(user)
        .where('id = :id', { id: user.id })
        .execute();
    } catch (e) {
      throw new Error(e);
    }
  }

  findByUsername(username: string): Promise<User> {
    return User.findOne({ where: { username: username } });
  }
}
