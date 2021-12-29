import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CompetenceRegisterComponent } from "./competence-register.component";

const ROUTES: Routes = [
  {
    path: "",
    component: CompetenceRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class CompetenceRegisterRoutingModule { }
