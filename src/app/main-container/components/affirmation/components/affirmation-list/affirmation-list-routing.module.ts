import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AffirmationListComponent } from "./affirmation-list.component";

const ROUTES: Routes = [
  {
    path: "",
    component: AffirmationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AffirmationListRoutingModule { }
