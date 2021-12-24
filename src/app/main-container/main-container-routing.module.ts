import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { APP_ROUTES } from "../shared/routes/app-routes";
import { MainContainerComponent } from "./main-container.component";

const ROUTES: Routes = [
  {
    path: "",
    component: MainContainerComponent,
    children: [
      {
        path: APP_ROUTES.home,
        loadChildren: () => import("./components/home/home.module").then(m => m.HomeModule)
      },
      {
        path: APP_ROUTES.competenceRegister,
        loadChildren: () => import("./components/competence-register/competence-register.module").then(m => m.CompetenceRegisterModule)
      },
      {
        path: APP_ROUTES.competenceList,
        loadChildren: () => import("./components/competence-list/competence-list.module").then(m => m.CompetenceListModule)
      },
      {
        path: "**",
        redirectTo: APP_ROUTES.home
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class MainContainerRoutingModule { }
