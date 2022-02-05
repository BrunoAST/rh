import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import * as faker from "faker";

import { APP_ROUTES } from "src/app/shared/routes/app-routes";
import { AffirmationListModule } from "../affirmation-list.module";
import { AffirmationListComponent } from "../affirmation-list.component";
import { AFFIRMATION_LIST_FIELD_CONFIGS } from "../constants/affirmation-list-field-configs";

let component: AffirmationListComponent;
let fixture: ComponentFixture<AffirmationListComponent>;

const actionList = (): HTMLElement => {
  return fixture.nativeElement.querySelector("app-action-list");
}

describe(AffirmationListComponent.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AffirmationListModule, RouterTestingModule]
    }).compileComponents();
    fixture = TestBed.createComponent(AffirmationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`Should navigate to register page when actionButton is clicked`, () => {
    spyOn(component.router, "navigate");
    actionList().dispatchEvent(new CustomEvent("actionButtonClicked"));
    fixture.detectChanges();
    expect(component.router.navigate).toHaveBeenCalledOnceWith([`${APP_ROUTES.affirmation}/${APP_ROUTES.register}`]);
  });

  it(`Should contains the correct values for the list`, () => {
    const item = { affirmation: faker.random.word() };
    expect(AFFIRMATION_LIST_FIELD_CONFIGS[0].valueToBeShowed(item)).toBe(item.affirmation);
  });
});
