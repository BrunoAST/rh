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

  it(`#${BaseFormService.prototype.getFieldValue.name} should throw when informed field doesn't exist in the form`, () => {
    const fakeField = faker.random.alphaNumeric();
    expect(() => baseFormService.getFieldValue(fakeField))
      .withContext(`Field not found: ${fakeField}`)
      .toThrow(new Error(`The field ${fakeField} doesn't exist in the form`));
  });
});
