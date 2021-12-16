import { TestBed } from "@angular/core/testing";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import * as faker from "faker";

import { BaseFormService } from "../base-form-service";
import { BaseFormServiceStub } from "./base-form-service-stub";

let baseFormService: BaseFormService;
let form: FormGroup;

describe(BaseFormService.name, () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [BaseFormServiceStub]
    });
    baseFormService = TestBed.inject(BaseFormServiceStub);
    baseFormService.buildForm();
    form = baseFormService.form;
  });

  it("Should initialize the form", () => {
    expect(form).toBeDefined();
    expect(form.contains('field')).toBeTruthy();
  });

  it(`#${BaseFormService.prototype.updateFieldValue.name} should update the value`, () => {
    const value = faker.random.word();
    baseFormService.updateFieldValue("field", value);
    expect(form.get("field")?.value).toBe(value);
  });

  it(`#${BaseFormService.prototype.updateFieldValue.name} should throw when informed field doesn't exist in the form`, () => {
    const fakeField = faker.random.alphaNumeric();
    expect(() => baseFormService.updateFieldValue(fakeField, ""))
      .withContext(`Field not found: ${fakeField}`)
      .toThrow(new Error(`The field ${fakeField} doesn't exist in the form`));
  });

  it(`#${BaseFormService.prototype.getFieldValue.name} should return the current value of the field`, () => {
    const value = faker.random.word();
    baseFormService.updateFieldValue("field", value);
    expect(baseFormService.getFieldValue("field")).toBe(value);
  });

  it(`#${BaseFormService.prototype.isFormInvalid.name} should return true when form invalid`, () => {
    expect(baseFormService.isFormInvalid()).toBeTruthy();
  });

  it(`#${BaseFormService.prototype.isFormInvalid.name} should return false when form valid`, () => {
    baseFormService.updateFieldValue("field", faker.random.word());
    expect(baseFormService.isFormInvalid()).toBeFalsy();
  });

  it(`#${BaseFormService.prototype.isFieldInvalid.name} should return true when field invalid`, () => {
    expect(baseFormService.isFieldInvalid("field")).toBeTruthy();
  });

  it(`#${BaseFormService.prototype.isFieldInvalid.name} should return false when field valid`, () => {
    baseFormService.updateFieldValue("field", faker.random.word());
    expect(baseFormService.isFieldInvalid("field")).toBeFalsy();
  });

  it(`#${BaseFormService.prototype.hasError.name} should return true when field contains an error`, () => {
    expect(baseFormService.hasError("field", "required")).toBeTruthy();
  });

  it(`#${BaseFormService.prototype.hasError.name} should return false when field doesn't contain errors`, () => {
    baseFormService.updateFieldValue("field", faker.random.word());
    expect(baseFormService.hasError("field", "required")).toBeFalsy();
  });
});
