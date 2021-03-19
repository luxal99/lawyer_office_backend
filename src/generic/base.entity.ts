import {  PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
export class Base {

  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;


}
