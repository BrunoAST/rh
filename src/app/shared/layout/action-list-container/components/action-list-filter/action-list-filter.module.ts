import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActionListFilterComponent } from "./action-list-filter.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ActionListFilterComponent],
  exports: [ActionListFilterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ActionListFilterModule { }
