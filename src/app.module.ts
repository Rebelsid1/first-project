import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypesController } from './types/types.controller';
import { CarModelsService } from './car-models/car-models.service';
import { CarModelsModule } from './car-models/car-models.module';

@Module({
  imports: [CarModelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
