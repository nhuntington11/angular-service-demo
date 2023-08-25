import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibInRootService {
  public counter: number = 0;

  constructor() {
    console.log('CREATED: MyLibInRoot service');
  }

  public alterTextFromInRootService(text: string): string {
    return text += ` [MyLibInRoot service ${this.counter++}]`;
  }
}