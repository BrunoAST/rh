import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CompetenceRegisterRoutingModule } from "./competence-register-routing.module";
import { CompetenceRegisterComponent } from "./competence-register.component";
import { RegisterContainerModule } from "src/app/shared/layout/register-container/register-container.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CompetenceRegisterRoutingModule,
    RegisterContainerModule
  ],
  declarations: [CompetenceRegisterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CompetenceRegisterModule { }
