import { Injectable } from '@angular/core';

@Injectable()
export class LazyLoadArrayService {
  public counter: number = 0;

  constructor() {
    console.log('CREATED: LazyLoadArray service');
  }

  public addProviderArrayToText(text: string): string {
    return text += ` [LazyLoadArray service ${this.counter++}]`
  }
}