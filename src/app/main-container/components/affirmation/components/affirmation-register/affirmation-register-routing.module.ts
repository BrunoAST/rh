import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AffirmationRegisterComponent } from "./affirmation-register.component";

const ROUTES: Routes = [
  {
    path: "",
    component: AffirmationRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AffirmationRegisterRoutingModule { }
