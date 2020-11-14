import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientRepository } from '../repository/client.repository';
import { CaseModule } from '../case/case.module';

@Module({
  imports:[TypeOrmModule.forFeature([ClientRepository]), CaseModule],
  controllers: [ClientController],
  providers: [ClientService]
})
export class ClientModule {}
