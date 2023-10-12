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

  @Post('cars')
  create(@Body() body) {
    return this.carModelsService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.carModelsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
  return this.carModelsService.remove(id);
  }
}
