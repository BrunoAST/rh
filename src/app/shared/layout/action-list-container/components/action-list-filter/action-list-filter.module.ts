import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { ActionListFilterComponent } from "./action-list-filter.component";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ActionListFilterComponent],
  exports: [ActionListFilterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ActionListFilterModule { }
