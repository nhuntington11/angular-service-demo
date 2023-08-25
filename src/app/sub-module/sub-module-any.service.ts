import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class SubModuleAnyService {
  public counter: number = 0;

  constructor() {
    console.log('CREATED: SubModuleAny Service');
  }

  public ngOnDestroy() {
    console.log('DESTROYED: SubModuleAny Service');
  }

  public addSubModuleAnyToText(text: string): string {
    return text += ` [subModule any service ${this.counter++}]`;
  }
}