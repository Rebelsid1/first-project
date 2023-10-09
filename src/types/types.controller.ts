import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';

@Controller('types')
export class TypesController {
  @Get()
  findAll() {
    return 'this will return all the types';
  }

  @Get(':id')
  findOne(@Param('id') id: Number) {
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