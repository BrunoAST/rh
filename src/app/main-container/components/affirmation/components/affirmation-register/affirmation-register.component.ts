import { Component, OnInit } from "@angular/core";
import { SelectOptions } from "@innove/rh-core-ui/dist/types/components/select/types/select-options";

import { AffirmationRegisterFormService } from "./services/affirmation-register-form.service";
import { AFFIRMATION_REGISTER_BREADCRUMBS } from "./constants/affirmation-register-breadcrumbs";

@Component({
  templateUrl: "./affirmation-register.component.html",
  providers: [AffirmationRegisterFormService]
})
export class AffirmationRegisterComponent implements OnInit {
  breadcrumbsPaths = AFFIRMATION_REGISTER_BREADCRUMBS;
  options: SelectOptions[] = Array.from({ length: 10 }).map((_, index) => ({
    title: `Competência ${index + 1}`,
    value: (index + 1).toString()
  }));

  constructor(public formService: AffirmationRegisterFormService) { }

  ngOnInit(): void {
    this.formService.buildForm();
  }

  updateFieldValue(field: string, event: any): void {
    this.formService.updateFieldValue(field, event.detail);
  }

  save(): void {
  }
}
