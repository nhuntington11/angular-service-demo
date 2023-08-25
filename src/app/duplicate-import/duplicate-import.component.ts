import { Component, OnDestroy } from '@angular/core'

import { MyLibArrayService } from 'my-lib';
import { MyLibInRootService } from 'my-lib';

@Component({
  selector: 'app-duplicate-import',
  templateUrl: 'duplicate-import.component.html'
})
export class DuplicateImportComponent implements OnDestroy {
  public duplicateText: string = 'duplicate text';

  constructor(
    private myLibInRootService: MyLibInRootService,
    private myLibArrayService: MyLibArrayService
  ) {
    console.log('CREATED: Duplicate component');
  }

  public ngOnDestroy(): void {
    console.log('DESTROYED: Duplicate component');
  }

  public alterTextWithMyLibInRootService(): void {
    this.duplicateText = this.myLibInRootService.alterTextFromInRootService(this.duplicateText);
  }

  public alterTextWithMyLibProviderService(): void {
    this.duplicateText = this.myLibArrayService.alterTextFromLibraryServiceProvidedInModule(this.duplicateText);
  }

  public reset(): void {
    this.duplicateText = 'duplicate text';
  }
}