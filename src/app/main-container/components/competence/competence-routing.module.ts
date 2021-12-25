import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { APP_ROUTES } from "src/app/shared/routes/app-routes";

const ROUTES: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: () => import("./components/competence-list/competence-list.module").then(m => m.CompetenceListModule)
  },
  {
    path: APP_ROUTES.register,
    loadChildren: () => import("./components/competence-register/competence-register.module").then(m => m.CompetenceRegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class CompetenceRoutingModule { }
