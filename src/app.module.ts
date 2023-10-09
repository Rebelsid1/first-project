import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypesController } from './types/types.controller';
import { CarModelsService } from './car-models/car-models.service';

@Module({
  imports: [],
  controllers: [AppController, TypesController],
  providers: [AppService, CarModelsService],
})
export class AppModule {}
