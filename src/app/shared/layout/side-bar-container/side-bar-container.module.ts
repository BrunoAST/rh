import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { SideBarContainerComponent } from "./side-bar-container.component";

@NgModule({
  imports: [CommonModule],
  declarations: [SideBarContainerComponent],
  exports: [SideBarContainerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SideBarContainerModule { }
