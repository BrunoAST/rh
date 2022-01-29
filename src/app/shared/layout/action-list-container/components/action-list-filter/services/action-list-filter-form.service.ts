import { Injectable } from "@angular/core";

import { BaseFormService } from "../../../../../contracts/base-form-service/base-form-service";

@Injectable()
export class ActionListFilterFormService extends BaseFormService {
  buildForm(): void {
    this.form = this.formBuilder.group({
      filter: [""],
      itemsPerPage: ["10"]
    });
  }
}
