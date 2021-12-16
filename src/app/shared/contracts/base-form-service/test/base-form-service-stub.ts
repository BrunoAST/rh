import { Injectable } from "@angular/core";
import { BaseFormService } from "../base-form-service";

@Injectable()
export class BaseFormServiceStub extends BaseFormService {
  buildForm(): void {
    this.form = this.formBuilder.group({
      field: [""]
    });
  }
}
