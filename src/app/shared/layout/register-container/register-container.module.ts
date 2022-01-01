import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ActionHeaderModule } from "../action-header/action-header.module";
import { RegisterContainerComponent } from "./register-container.component";

@NgModule({
  imports: [CommonModule, ActionHeaderModule],
  declarations: [RegisterContainerComponent],
  exports: [RegisterContainerComponent]
})
export class RegisterContainerModule { }
