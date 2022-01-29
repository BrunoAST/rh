import { TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ActionListFilterFormService } from "./action-list-filter-form.service";

let service: ActionListFilterFormService;

describe(ActionListFilterFormService.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      providers: [ActionListFilterFormService]
    });
    service = TestBed.inject(ActionListFilterFormService);
    service.buildForm();
  });

  it("Should build form fields", () => {
    expect(service.form.contains("filter")).toBeTruthy();
    expect(service.form.contains("itemsPerPage")).toBeTruthy();
  });

  it("Filter field should start with an empty string", () => {
    expect(service.getFieldValue("filter")).toBe("");
  });

  it("ItemsPerPage field should start with value equals to 10", () => {
    expect(service.getFieldValue("itemsPerPage")).toBe("10");
  });
});
