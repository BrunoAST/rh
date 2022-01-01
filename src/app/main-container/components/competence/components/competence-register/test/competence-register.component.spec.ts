import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import * as faker from "faker";

import { CompetenceRegisterComponent } from "../competence-register.component";
import { CompetenceRegisterModule } from "../competence-register.module";
import { COMPETENCE_BREADCRUMBS } from "../constants/competence-breadcrumbs";

let component: CompetenceRegisterComponent;
let fixture: ComponentFixture<CompetenceRegisterComponent>;

const registerContainer = (): HTMLElement => {
  return fixture.nativeElement.querySelector("app-register-container");
}

describe(CompetenceRegisterComponent.name, () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetenceRegisterModule, RouterTestingModule]
    }).compileComponents();
    fixture = TestBed.createComponent(CompetenceRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should contain bread crumbs paths", () => {
    expect(component.breadcrumbsPaths).toEqual(COMPETENCE_BREADCRUMBS);
  });

  it("Should show required error message when name input is empty", () => {
    const inputName: HTMLRhInputTextElement = fixture.nativeElement.querySelector("rh-input-text");
    const errorMessage: HTMLRhInputErrorMessageElement = inputName.querySelector("rh-input-error-message");
    expect(errorMessage.textContent.trim()).toBe("Campo obrigatório");
    expect(errorMessage.isVisible).toBeTruthy();
  });

  it("Should hide required error message when name input is not empty", () => {
    const inputName: HTMLRhInputTextElement = fixture.nativeElement.querySelector("rh-input-text");
    const errorMessage: HTMLRhInputErrorMessageElement = inputName.querySelector("rh-input-error-message");
    inputName.dispatchEvent(new CustomEvent("valueUpdated", { detail: faker.random.word() }));
    fixture.detectChanges();
    expect(errorMessage.isVisible).toBeFalsy();
  });

  it("Should show required error message when description input is empty", () => {
    const inputDescription: HTMLRhTextAreaElement = fixture.nativeElement.querySelector("rh-text-area");
    const errorMessage: HTMLRhInputErrorMessageElement = inputDescription.querySelector("rh-input-error-message");
    expect(errorMessage.textContent.trim()).toBe("Campo obrigatório");
    expect(errorMessage.isVisible).toBeTruthy();
  });

  it("Should hide required error message when description input is not empty", () => {
    const inputDescription: HTMLRhTextAreaElement = fixture.nativeElement.querySelector("rh-text-area");
    const errorMessage: HTMLRhInputErrorMessageElement = inputDescription.querySelector("rh-input-error-message");
    inputDescription.dispatchEvent(new CustomEvent("valueUpdated", { detail: faker.random.word() }));
    fixture.detectChanges();
    expect(errorMessage.isVisible).toBeFalsy();
  });

  it(`Should call #${CompetenceRegisterComponent.prototype.save.name} when save button is clicked`, () => {
    spyOn(component, "save");
    registerContainer().dispatchEvent(new Event("actionButtonClicked"));
    expect(component.save).toHaveBeenCalled();
  });
});
