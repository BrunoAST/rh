import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { APP_ROUTES } from "src/app/shared/routes/app-routes";
import { COMPETENCE_LIST_BREADCRUMBS } from "./constants/competence-list-breadcrumbs";
import { COMPETENCE_LIST_FIELD_CONFIGS } from "./constants/competence-list-field-configs";

@Component({
  templateUrl: "./competence-list.component.html"
})
export class CompetenceListComponent {
  breadcrumbsPaths = COMPETENCE_LIST_BREADCRUMBS;
  fieldConfigs = COMPETENCE_LIST_FIELD_CONFIGS;

  items = Array.from({ length: 20 }).map((_, index) => ({ competence: `Competência ${index + 1}` }));

  constructor(public router: Router) { }

  onActionButtonClicked(): void {
    this.router.navigate([`${APP_ROUTES.competence}/${APP_ROUTES.register}`]);
  }
}
