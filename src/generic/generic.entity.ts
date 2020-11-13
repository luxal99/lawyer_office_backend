import {PrimaryGeneratedColumn} from "typeorm";

export class GenericEntity {

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  @PrimaryGeneratedColumn()
  id: number;

}
