import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateGaresDto } from '../dto/gares.dto';

@Controller('gares')
export class GaresController {
  @Get()
  findAll(): string {
    return 'Hello Gares!';
  }

  @Get(':id')
  findOne(): string {
    return 'Hello Gare!';
  }

  @Post()
  create(@Body() createGaresDto: CreateGaresDto): string {
    return 'This action adds a new gare';
  }
}
