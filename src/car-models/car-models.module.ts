import { Module } from '@nestjs/common';
import { TypesController } from 'src/types/types.controller';
import { CarModelsService } from './car-models.service';

@Module({ controllers: [TypesController], providers: [CarModelsService] })
export class CarModelsModule {}
