import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';

// localhost:3000/cat
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  // localhost:3000/cat/
  @Get()
  getHello(): string {
    return this.catService.getHello();
  }

  // localhost:3000/cat/greet
  @Get('greet')
  introduce(): string {
    return this.catService.introduce();
  }
}
