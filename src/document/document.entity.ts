import { Column, Entity } from 'typeorm';
import { Base } from '../generic/base.entity';
import { DocumentType } from '../enums/DocumentType';

@Entity()
export class Document extends Base {

  @Column()
  uri: string;

  @Column({
    type: 'enum',
    enum: DocumentType,
    default: DocumentType.IMAGE,
  })
  type: DocumentType;
}
