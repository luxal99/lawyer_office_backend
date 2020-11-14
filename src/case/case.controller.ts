import { Controller } from '@nestjs/common';
import { GenericController } from '../generic/generic.controller';
import { Case } from './case.entity';
import { CaseService } from './case.service';

@Controller('case')
export class CaseController extends GenericController<Case>{
  constructor(private readonly service:CaseService) {
    super(service);
  }
}
