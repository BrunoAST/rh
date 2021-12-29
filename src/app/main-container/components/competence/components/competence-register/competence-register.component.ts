import { Component, OnInit } from "@angular/core";

import { COMPETENCE_BREADCRUMBS } from "./constants/competence-breadcrumbs";
import { CompetenceRegisterFormService } from "./services/competence-register-form.service";

@Component({
  templateUrl: "./competence-register.component.html",
  providers: [CompetenceRegisterFormService]
})
export class CompetenceRegisterComponent implements OnInit {
  breadcrumbsPaths = COMPETENCE_BREADCRUMBS;

  constructor(public formService: CompetenceRegisterFormService) { }

  ngOnInit(): void {
    this.formService.buildForm();
  }

  updateFieldValue(field: string, event: any): void {
    this.formService.updateFieldValue(field, event.detail);
  }

  save(): void {
  }
}
