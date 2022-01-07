import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import * as faker from "faker";

import { APP_ROUTES } from "src/app/shared/routes/app-routes";
import { CompetenceListComponent } from "../competence-list.component";
import { CompetenceListModule } from "../competence-list.module";
import { COMPETENCE_LIST_FIELD_CONFIGS } from "../constants/competence-list-field-configs";

let component: CompetenceListComponent;
let fixture: ComponentFixture<CompetenceListComponent>;

const actionList = (): HTMLElement => {
  return fixture.nativeElement.querySelector("app-action-list");
}

describe(CompetenceListComponent.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CompetenceListModule, RouterTestingModule]
    }).compileComponents();
    fixture = TestBed.createComponent(CompetenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`Should navigate to register page when actionButton is clicked`, () => {
    spyOn(component.router, "navigate");
    actionList().dispatchEvent(new CustomEvent("actionButtonClicked"));
    fixture.detectChanges();
    expect(component.router.navigate).toHaveBeenCalledOnceWith([`${APP_ROUTES.competence}/${APP_ROUTES.register}`]);
  });

  it(`Should contains the correct values for the list`, () => {
    const item = {
      name: faker.random.word(),
      email: faker.internet.email()
    };
    expect(COMPETENCE_LIST_FIELD_CONFIGS[0].valueToBeShowed(item)).toBe(item.name);
    expect(COMPETENCE_LIST_FIELD_CONFIGS[1].valueToBeShowed(item)).toBe(item.email);
  });
});
