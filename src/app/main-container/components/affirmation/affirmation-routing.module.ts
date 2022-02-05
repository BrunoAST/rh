import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { APP_ROUTES } from "../../../shared/routes/app-routes";

const ROUTES: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: () => import("./components/affirmation-list/affirmation-list.module").then(m => m.AffirmationListModule)
  },
  {
    path: APP_ROUTES.register,
    loadChildren: () => import("./components/affirmation-register/affirmation-register.module").then(m => m.AffirmationRegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AffirmationRoutingModule { }
