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
        path: APP_ROUTES.affirmation,
        loadChildren: () => import("./components/affirmation/affirmation.module").then(m => m.AffirmationModule)
      },
      {
        path: APP_ROUTES.competence,
        loadChildren: () => import("./components/competence/competence.module").then(m => m.CompetenceModule)
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
