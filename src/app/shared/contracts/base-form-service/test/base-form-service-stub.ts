import { Injectable } from "@angular/core";
import { Validators } from "@angular/forms";

import { BaseFormService } from "../base-form-service";

@Injectable()
export class BaseFormServiceStub extends BaseFormService {
  buildForm(): void {
    this.form = this.formBuilder.group({
      field: ["", [Validators.required]]
    });
  }
}
