import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { RegisterContainerComponent } from "./register-container.component";

@NgModule({
  imports: [CommonModule],
  declarations: [RegisterContainerComponent],
  exports: [RegisterContainerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterContainerModule { }
