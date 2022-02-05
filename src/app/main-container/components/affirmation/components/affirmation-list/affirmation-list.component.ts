import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AFFIRMATION_LIST_BREADCRUMBS } from "./constants/affirmation-list-breadcrumbs";
import { AFFIRMATION_LIST_FIELD_CONFIGS } from "./constants/affirmation-list-field-configs";
import { APP_ROUTES } from "../../../../../shared/routes/app-routes";

@Component({
  templateUrl: "./affirmation-list.component.html"
})
export class AffirmationListComponent {
  breadcrumbsPaths = AFFIRMATION_LIST_BREADCRUMBS;
  fieldConfigs = AFFIRMATION_LIST_FIELD_CONFIGS;

  items = Array.from({ length: 20 }).map((_, index) => ({ affirmation: `Afirmação ${index + 1}` }));

  constructor(public router: Router) { }

  onActionButtonClicked(): void {
    this.router.navigate([`${APP_ROUTES.affirmation}/${APP_ROUTES.register}`]);
  }
}
