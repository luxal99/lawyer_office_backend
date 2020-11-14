import { EntityRepository, Repository } from 'typeorm';
import { Client } from '../client/client.entity';

@EntityRepository(Client)
export class ClientRepository extends Repository<Client> {

}
