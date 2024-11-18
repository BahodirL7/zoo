import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  getHello(): string {
    return 'Meow - Meow';
  }

  introduce(): string {
    return 'Hey, I am Tom!';
  }
}
