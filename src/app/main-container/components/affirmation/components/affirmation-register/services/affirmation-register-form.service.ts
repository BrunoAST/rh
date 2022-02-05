import { Injectable } from "@angular/core";
import { Validators } from "@angular/forms";

import { BaseFormService } from "src/app/shared/contracts/base-form-service/base-form-service";

@Injectable()
export class AffirmationRegisterFormService extends BaseFormService {
  buildForm(): void {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required]],
      description: ["", [Validators.required]],
      competenceId: [null]
    });
  }
}
