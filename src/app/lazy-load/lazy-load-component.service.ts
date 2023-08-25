import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class LazyLoadComponentService implements OnDestroy {
  public counter: number = 0;

  constructor() {
    console.log('CREATED: LazyLoadComponentService');
  }

  public ngOnDestroy(): void {
    console.log('DESTROYED: LazyLoadComponent service');
  }

  public alterTextFromLazyLoadComponentService(text: string): string {
    return text += ` [LazyLoadComponent service ${this.counter++}]`;
  }
}