import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'Woof - Woof';
  }

  public introduce(): string {
    return 'Hey, i am Rex';
  }

  public modifyDetail(): string {
    return 'Successfully Modified';
  }
}
