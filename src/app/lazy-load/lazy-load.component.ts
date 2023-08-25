import { Component, OnDestroy } from '@angular/core';

import { MyLibArrayService } from 'my-lib';
//import { ScopedService } from 'my-lib';

import { RootServiceService } from '../root-service.service';

import { LazyLoadComponentService } from './lazy-load-component.service';
import { LazyLoadArrayService } from './lazy-load-array.service';
import { SubModuleAnyService } from '../sub-module/sub-module-any.service';
import { LazyLoadToRootService } from './lazy-load-to-root.service';

@Component({
  selector: 'app-lazy-load',
  templateUrl: 'lazy-load.component.html',
  providers: [ LazyLoadComponentService ]
})
export class LazyLoadComponent implements OnDestroy {
  public lazyText: string = 'lazy text';

  constructor(
    //private myLibScopedService: ScopedService,
    private lazyLoadComponentService: LazyLoadComponentService,
    private myLibArrayService: MyLibArrayService,
    private lazyLoadArrayService: LazyLoadArrayService,
    private rootService: RootServiceService,
    private subModuleAnyService: SubModuleAnyService,
    private lazyLoadToRootService: LazyLoadToRootService
  ) {
    console.log('CREATED: LazyLoad component');
  }

  public ngOnDestroy(): void {
    console.log('DESTROYED: LazyLoad component');
  }

  public alterLazyTextFromMyLibService(): void {
    this.lazyText = this.myLibArrayService.alterTextFromLibraryServiceProvidedInModule(this.lazyText);
  }

  public alterLazyTextFromRoot(): void {
    this.lazyText = this.rootService.addRootToText(this.lazyText);
  }

  public alterLazyTextFromLazyLoadArrayService(): void {
    this.lazyText = this.lazyLoadArrayService.addProviderArrayToText(this.lazyText);
  }

  public alterLazyTextFromSubModuleAnyService(): void {
    this.lazyText = this.subModuleAnyService.addSubModuleAnyToText(this.lazyText);
  }

  public alterLazyTextFromLazyLoadToRootService(): void {
    this.lazyText = this.lazyLoadToRootService.addToRootToText(this.lazyText);
  }

  public alterLazyTextFromComponentService(): void {
    this.lazyText = this.lazyLoadComponentService.alterTextFromLazyLoadComponentService(this.lazyText);
  }

  public reset(): void {
    this.lazyText = 'lazy text';
  }
}