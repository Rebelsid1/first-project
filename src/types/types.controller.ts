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
    const { limit, offset } = paginationQuery;
    //This for pagination
    return `this will return all the types with limit = ${limit} and offset = ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log(id);
    return `This is returning the ${id}`;
  }

  @Post('cars')
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `this method updates the ${id} in this`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `this will delete the actions on ${id}`;
  }
}
