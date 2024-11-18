import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  public getHello(): string {
    return 'Meow - Meow';
  }

  public introduce(): string {
    return 'Hey, I am Tom!';
  }
}
