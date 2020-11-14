import { Module } from '@nestjs/common';
import { LawsuitController } from './lawsuit.controller';
import { LawsuitService } from './lawsuit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LawsuitRepository } from '../repository/lawsuit.repository';

@Module({
  imports: [TypeOrmModule.forFeature([LawsuitRepository])],
  controllers: [LawsuitController],
  providers: [LawsuitService],
})
export class LawsuitModule {
}
