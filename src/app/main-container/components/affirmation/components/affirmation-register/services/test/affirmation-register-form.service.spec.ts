import { TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

import { AffirmationRegisterFormService } from "../affirmation-register-form.service";

let service: AffirmationRegisterFormService;

describe(AffirmationRegisterFormService.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      providers: [AffirmationRegisterFormService]
    });
    service = TestBed.inject(AffirmationRegisterFormService);
    service.buildForm();
  });

  it("Should build form fields", () => {
    expect(service.form.contains("name")).toBeTruthy();
    expect(service.form.contains("description")).toBeTruthy();
    expect(service.form.contains("competenceId")).toBeTruthy();
  });

  it("Name field should starts with an empty string", () => {
    expect(service.form.get("name").value).toBe("");
  });

  it("Name field should have required validator", () => {
    expect(service.form.get("name").hasValidator(Validators.required)).toBeTruthy();
  });

  it("Description field should starts with an empty string", () => {
    expect(service.form.get("description").value).toBe("");
  });

  it("Description field should have required validator", () => {
    expect(service.form.get("description").hasValidator(Validators.required)).toBeTruthy();
  });

  it("CompetenceId field should starts with null value", () => {
    expect(service.form.get("competenceId").value).toBeNull();
  });
});
