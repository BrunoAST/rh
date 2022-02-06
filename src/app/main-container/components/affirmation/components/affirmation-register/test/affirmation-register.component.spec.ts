import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import * as faker from 'faker';

import { CompetenceRegisterModule } from "../../../../competence/components/competence-register/competence-register.module";
import { AffirmationRegisterComponent } from "../affirmation-register.component";
import { AFFIRMATION_REGISTER_BREADCRUMBS } from '../constants/affirmation-register-breadcrumbs';

let component: AffirmationRegisterComponent;
let fixture: ComponentFixture<AffirmationRegisterComponent>;

const inputName = () => {
  return fixture.nativeElement.querySelector("rh-input-text");
}

const inputDescription = () => {
  return fixture.nativeElement.querySelector("rh-text-area");
}

const inputCompetence = () => {
  return fixture.nativeElement.querySelector("rh-text-area");
}

const inputNameErrorMessage = () => {
  return inputName().querySelector("rh-input-error-message");
}

const inputDescriptionErrorMessage = () => {
  return inputDescription().querySelector("rh-input-error-message");
}

describe(AffirmationRegisterComponent.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CompetenceRegisterModule, RouterTestingModule]
    }).compileComponents();
    fixture = TestBed.createComponent(AffirmationRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should build component", () => {
    expect(component).toBeDefined();
  });

  it("Should contain breadcrumbs paths", () => {
    expect(component.breadcrumbsPaths).toEqual(AFFIRMATION_REGISTER_BREADCRUMBS);
  });

  it("Should start with name input empty", () => {
    expect(inputName().value).toBe("");
  });

  it("Should show required error message when name input is empty", () => {
    expect(inputNameErrorMessage().textContent.trim()).toBe("Campo obrigatório");
    expect(inputNameErrorMessage().isVisible).toBeTruthy();
  });

  it("Should hide required error message when name input is not empty", () => {
    inputName().dispatchEvent(new CustomEvent("valueUpdated", { detail: faker.random.word() }));
    fixture.detectChanges();
    expect(inputNameErrorMessage().isVisible).toBeFalsy();
  });

  it("Should start with description input empty", () => {
    expect(inputDescription().value).toBe("");
  });

  it("Should show required error message when description input is empty", () => {
    expect(inputDescriptionErrorMessage().textContent.trim()).toBe("Campo obrigatório");
    expect(inputDescriptionErrorMessage().isVisible).toBeTruthy();
  });

  it("Should hide required error message when description input is not empty", () => {
    inputDescription().dispatchEvent(new CustomEvent("valueUpdated", { detail: faker.random.word() }));
    fixture.detectChanges();
    expect(inputDescriptionErrorMessage().isVisible).toBeFalsy();
  });

  it("Should start with competenceId input empty", () => {
    expect(inputCompetence().value).toBe("");
  });
});
