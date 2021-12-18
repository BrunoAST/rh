import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Injectable()
export abstract class BaseFormService {
  form = new FormGroup({});

  constructor(protected formBuilder: FormBuilder) { }

  abstract buildForm(): void;

  updateFieldValue(field: string, value: any): void {
    this.validateField(field);
    this.form.get(field).setValue(value);
  }

  getFieldValue(field: string): any {
    this.validateField(field);
    return this.form.get(field).value;
  }

  isFieldInvalid(field: string): boolean {
    this.validateField(field);
    return this.form.get(field).invalid;
  }

  isFormInvalid(): boolean {
    return this.form.invalid;
  }

  hasError(field: string, errorName: string): boolean {
    this.validateField(field);
    return this.form.get(field).hasError(errorName);
  }

  private validateField(field: string): void {
    if (!this.form.get(field)) {
      throw new Error(`The field ${field} doesn't exist in the form`);
    }
  }
}
