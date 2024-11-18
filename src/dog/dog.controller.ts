import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { DogService } from './dog.service';
import { Request, Response } from 'express';

// localhost:3000/dog
@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  // localhost:3000/dog/
  @Get()
  public getHello(): string {
    return this.dogService.getHello();
  }

  // localhost:3000/dog/greet
  @Get('greet/:id')
  public introduce(@Param('id') id: string, @Query('name') name: any): string {
    console.log('id:', id);
    console.log('query:', name);
    return this.dogService.introduce();
  }

  @Post('edit')
  public modifyDetail(@Body() body: any): string {
    console.log('body:', body);
    return this.dogService.modifyDetail();
  }
}
