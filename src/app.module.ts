import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypesController } from './types/types.controller';

@Module({
  imports: [],
  controllers: [AppController, TypesController],
  providers: [AppService],
})
export class AppModule {}
