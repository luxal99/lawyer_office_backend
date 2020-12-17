import { Module } from '@nestjs/common';
import { Constant } from './const';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [Constant, ConfigModule],
})
export class ConstModule {

}
