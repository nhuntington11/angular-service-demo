import { Component, OnDestroy } from '@angular/core';

import { MyLibInRootService, MyLibArrayService, ScopedService } from './services';
import { MyLibErrorService } from './services/my-lib-error.service';

@Component({
  selector: 'lib-my-lib',
  templateUrl: 'my-lib.component.html',
})
export class MyLibComponent implements OnDestroy {
  public libraryText = 'library text';

  constructor(
    private myLibErrorService: MyLibErrorService,
    private libraryInRootService: MyLibInRootService,
    private myLibArrayService: MyLibArrayService,
    private scopedService: ScopedService
  ) {}

  public ngOnDestroy(): void {
    console.log('DESTROYED: MyLibComponent');
  }

  public alterLibraryTextWithScopedService(): void {
    this.libraryText = this.scopedService.addTextFromScopedService(this.libraryText);
  }

  public alterLibraryTextWithServiceProvidedInRoot(): void {
    this.libraryText = this.libraryInRootService.alterTextFromInRootService(this.libraryText);
  }

  public alterLibraryTextWithServiceProvidedInModuleArray(): void {
    this.libraryText = this.myLibArrayService.alterTextFromLibraryServiceProvidedInModule(this.libraryText);
  }

  public alterLibraryTextWithErrorService(): void {
    this.libraryText = this.myLibErrorService.alterTextWithMyLibError(this.libraryText);
  }

  public reset(): void {
    this.libraryText = 'library text';
  }
}
