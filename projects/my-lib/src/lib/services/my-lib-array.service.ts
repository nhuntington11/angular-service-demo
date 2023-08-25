import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibArrayService {
  public counter: number = 0;

  constructor() {
    console.log('CREATED: MyLibArray service');
  }

  public alterTextFromLibraryServiceProvidedInModule(text: string): string {
    return text += ` [MyLib array service ${this.counter++}]`;
  }
}
