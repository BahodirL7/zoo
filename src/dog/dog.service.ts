import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  getHello(): string {
    return 'Woof - Woof';
  }

  introduce(): string {
    return 'Hey, i am Rex';
  }
}
