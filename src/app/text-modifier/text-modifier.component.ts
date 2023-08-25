import { Component } from '@angular/core';

import { RootServiceService } from '../root-service.service';
import { SubModuleService } from '../sub-module/sub-module.service';
import { SubModuleAnyService } from '../sub-module/sub-module-any.service';
import { LazyLoadToRootService } from '../lazy-load/lazy-load-to-root.service';
//import { LazyLoadArrayService } from '../lazy-load/lazy-load-array.service'; // NULL INJECTOR ERROR
//import { ScopedService } from 'my-lib'

@Component({
  selector: 'app-text-modifier',
  templateUrl: './text-modifier.component.html'
})
export class TextModifierComponent {
  public componentText = 'component text';

  constructor(
    // NULL INJECTOR ERROR
    //private lazyLoadArrayService: LazyLoadArrayService,
    //private scopedService: ScopedService,
    private lazyLoadToRootService: LazyLoadToRootService,
    private rootService: RootServiceService,
    private subModuleService: SubModuleService,
    private subModuleAnyService: SubModuleAnyService
  ) {}

  public alterTextWithLazyLoadToRootService(): void {
    this.componentText = this.lazyLoadToRootService.addToRootToText(this.componentText);
  }

  // NULL INJECTOR ERROR
  // public alterTextWithLazyLoadArrayService(): void {
  //   this.componentText = this.lazyLoadArrayService.addProviderArrayToText(this.componentText);
  // }

  public alterTextWithRootService(): void {
    this.componentText = this.rootService.addRootToText(this.componentText);
  }

  public alterTextWithSubModuleService(): void {
    this.componentText = this.subModuleService.addSubModuleToText(this.componentText);
  }

  public alterTextWithSubModuleAnyService(): void {
    this.componentText = this.subModuleAnyService.addSubModuleAnyToText(this.componentText);
  }

  public resetText(): void {
    this.componentText = 'main text';
  }
}
