import { Controller } from '@nestjs/common';
import { GenericController } from '../generic/generic.controller';
import { Lawsuit } from './lawsuit.entity';
import { LawsuitService } from './lawsuit.service';

@Controller('lawsuit')
export class LawsuitController extends GenericController<Lawsuit> {


  constructor(private readonly service:LawsuitService) {
    super(service);
  }
}
