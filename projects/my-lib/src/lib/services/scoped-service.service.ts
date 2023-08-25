import { Injectable, OnDestroy } from '@angular/core';

import { MyLibModule } from '../my-lib.module';

@Injectable({
  providedIn: MyLibModule
})
export class ScopedService implements OnDestroy {
  public counter: number = 0;

  constructor() {
    console.log('CREATED: Scoped service');
  }

  public ngOnDestroy(): void {
    console.log('DESTROYED: Scoped service');
  }

  public addTextFromScopedService(text: string): string {
    return text += ` [scoped service ${this.counter++}]`;
  }
}