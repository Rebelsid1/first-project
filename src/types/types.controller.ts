import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CarModelsService } from 'src/car-models/car-models.service';
import { CreateCarModelsDto } from 'src/car-models/dto/create-car-models.dto/create-car-models.dto';
import { UpdateCarModelsDto } from 'src/car-models/dto/update-car-models.dto/update-car-models.dto';

@Controller('types')
export class TypesController {
  constructor(private readonly carModelsService: CarModelsService) {}
  @Get()
  findAll(@Query() paginationQuery) {
    //const { limit, offset } = paginationQuery;
    return this.carModelsService.findAll();
    //This for pagination
    //return `this will return all the types with limit = ${limit} and offset = ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.carModelsService.findOne(id);
  }
  @Post()
  create(@Body() createCarModelsDto: CreateCarModelsDto) {
    return this.carModelsService.create(createCarModelsDto);
  }

  // @Post('cars')
  // create(@Body() createCarModelsDto: CreateCarModelsDto) {
  //   return this.carModelsService.create(createCarModelsDto);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarModelsDto: UpdateCarModelsDto) {
    return this.carModelsService.update(id, updateCarModelsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
  return this.carModelsService.remove(id);
  }
}
