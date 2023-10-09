import { Injectable } from '@nestjs/common';
import { Model } from './entities/model.entity';

@Injectable()
export class CarModelsService {
  private carModels: Model[] = [
    // This is just a sample data //
    {
      id: 1,
      Name: 'A5',
      Type: 'RS',
      fuel: 'Unleaded',
      Quattro: true,
    },
  ];
}
