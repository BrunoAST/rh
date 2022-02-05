import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RegisterContainerModule } from "src/app/shared/layout/register-container/register-container.module";
import { AffirmationRegisterComponent } from "./affirmation-register.component";
import { AffirmationRegisterRoutingModule } from "./affirmation-register-routing.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AffirmationRegisterRoutingModule,
    RegisterContainerModule
  ],
  declarations: [AffirmationRegisterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AffirmationRegisterModule { }
