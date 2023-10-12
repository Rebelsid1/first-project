import { PartialType } from '@nestjs/mapped-types';
import { CreateCarModelsDto } from '../create-car-models.dto/create-car-models.dto';

export class UpdateCarModelsDto extends PartialType(CreateCarModelsDto) {}
