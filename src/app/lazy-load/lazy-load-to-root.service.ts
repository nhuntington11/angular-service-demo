import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadToRootService {
  public counter: number = 0;

  constructor() {
    console.log('CREATED: LazyLoadToRoot service');
  }

  public addToRootToText(text: string): string {
    return text += ` [LazyLoadToRoot service ${this.counter++}]`;
  }
}