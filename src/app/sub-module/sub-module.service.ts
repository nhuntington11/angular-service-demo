import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubModuleService implements OnDestroy {
  counter: number = 0;

  constructor() {
    console.log('CREATED: SubModule Service');
  }

  public ngOnDestroy(): void {
    console.log('DESTROYED: SubModule Service')
  }

  public addSubModuleToText(text: string): string {
    return text += ` [SubModule service ${this.counter++}]`;
  }
}