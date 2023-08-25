import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibErrorService {
  public counter: number = 0;

  constructor() {
    console.log('CREATED: MyLibError service');
  }

  public alterTextWithMyLibError(text: string): string {
    return text += ` [MyLibError ${this.counter++}]`;
  }
}