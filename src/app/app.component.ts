import { Component } from '@angular/core';

import { RootServiceService } from './root-service.service';
import { SubModuleService } from './sub-module/sub-module.service';
import { SubModuleAnyService } from './sub-module/sub-module-any.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'consuming-app';
  mainText = 'main text';

  constructor(
    private rootService: RootServiceService,
    private subModuleService: SubModuleService,
    private subModuleAnyService: SubModuleAnyService
  ) {}

  alterTextWithRootService(): void {
    this.mainText = this.rootService.addRootToText(this.mainText);
  }

  public alterTextWithSubModuleService(): void {
    this.mainText = this.subModuleService.addSubModuleToText(this.mainText);
  }

  public alterTextWithSubModuleAnyService(): void {
    this.mainText = this.subModuleAnyService.addSubModuleAnyToText(this.mainText);
  }

  public resetText(): void {
    this.mainText = 'main text';
  }
}
