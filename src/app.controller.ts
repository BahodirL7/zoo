import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// port: 3000
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('details')
  getDetails(): string {
    return this.appService.getDetails();
  }
}
