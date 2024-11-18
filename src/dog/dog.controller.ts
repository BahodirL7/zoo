import { Controller, Get, Param, Query, Req, Res } from '@nestjs/common';
import { DogService } from './dog.service';
import { Request, Response } from 'express';

// localhost:3000/dog
@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  // localhost:3000/dog/
  @Get()
  getHello(): string {
    return this.dogService.getHello();
  }

  // localhost:3000/dog/greet
  @Get('greet/:id')
  introduce(@Param('id') id: string, @Query('name') name: any): string {
    console.log('id:', id);
    console.log('query:', name);
    return this.dogService.introduce();

    // response.status(200).send(result);
  }
}
