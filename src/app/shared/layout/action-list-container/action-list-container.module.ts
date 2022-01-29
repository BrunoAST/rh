import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { ActionHeaderModule } from "../action-header/action-header.module";
import { ActionListContainerComponent } from "./action-list-container.component";
import { ActionListFilterModule } from "./components/action-list-filter/action-list-filter.module";

@NgModule({
  imports: [CommonModule, ActionHeaderModule, ActionListFilterModule],
  declarations: [ActionListContainerComponent],
  exports: [ActionListContainerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ActionListContainerModule { }
