import { Module } from '@nestjs/common';
import { CaseController } from './case.controller';
import { CaseService } from './case.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaseRepository } from '../repository/case.repository';

@Module({
  imports:[TypeOrmModule.forFeature([CaseRepository])],
  controllers: [CaseController],
  providers: [CaseService]
})
export class CaseModule {}
