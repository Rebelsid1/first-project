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
    {
      id: 2,
      Name: 'A6',
      Type: 'RS',
      fuel: 'Unleaded',
      Quattro: true,
    },
    {
      id: 3,
      Name: 'A7',
      Type: 'RS',
      fuel: 'Unleaded',
      Quattro: true,
    },
  ];
  findAll() {
    return this.carModels;
  }
  findOne(id: string) {
    return this.carModels.find((item) => item.id === +id);
  }

  create(createcarModelsDto: any) {
    this.carModels.push(createcarModelsDto);
  }

  update(id: string, updateCarModelsDto: any) {
    const existingModel = this.findOne(id);
    if (existingModel) {
    }
  }

  remove(id: string) {
    const carModelIndex = this.carModels.findIndex((item) => item.id === +id);
    if (carModelIndex >= 0) {
    this.carModels.splice(carModelIndex, 1);
    }
  }
}
