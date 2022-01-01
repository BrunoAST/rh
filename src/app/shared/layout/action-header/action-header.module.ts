import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ActionHeaderComponent } from "./action-header.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ActionHeaderComponent],
  exports: [ActionHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ActionHeaderModule { }
