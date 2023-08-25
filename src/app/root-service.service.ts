import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootServiceService implements OnDestroy {
  public counter: number = 0;

  constructor() {
    console.log('CREATED: Root Service');
  }

  public ngOnDestroy(): void {
    console.log('DESTROYED: Root Service');
  }

  public addRootToText(text: string): string {
    return text + ` [root service ${this.counter++}]`;
  }
}
