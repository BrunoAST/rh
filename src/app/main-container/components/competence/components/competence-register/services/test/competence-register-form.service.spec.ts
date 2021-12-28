import { TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { CompetenceRegisterFormService } from "../competence-register-form.service";

let service: CompetenceRegisterFormService;

describe(CompetenceRegisterFormService.name, () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      providers: [CompetenceRegisterFormService]
    });
    service = TestBed.inject(CompetenceRegisterFormService);
    service.buildForm();
  });

  it("Should build form fields", () => {
    expect(service.form.contains("name")).toBeTruthy();
    expect(service.form.contains("description")).toBeTruthy();
    expect(service.form.contains("idealGradeMin")).toBeTruthy();
    expect(service.form.contains("idealGradeMax")).toBeTruthy();
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

  it("IdealGradeMin field should starts with value equals to 1", () => {
    expect(service.form.get("idealGradeMin").value).toBe(1);
  });

  it("IdealGradeMax field should starts with value equals to 5", () => {
    expect(service.form.get("idealGradeMax").value).toBe(5);
  });
});
