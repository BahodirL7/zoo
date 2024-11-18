import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getDetails(): string {
    return 'Here are the Zoo details';
  }
}
