import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CompetenceListComponent } from "./competence-list.component";

const ROUTES: Routes = [
  {
    path: "",
    component: CompetenceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class CompetenceListRoutingModule { }
