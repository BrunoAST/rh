import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import * as faker from "faker";

import { ActionHeaderComponent } from "../action-header.component";
import { ActionHeaderModule } from "../action-header.module";
import { BREADCRUMBS_PATHS } from "./breadcrumb-paths-mock";

let fixture: ComponentFixture<ActionHeaderComponent>;
let component: ActionHeaderComponent;

const actionButton = () => {
  return fixture.nativeElement.querySelector("rh-button");
}

const breadcrumbs = () => {
  return fixture.nativeElement.querySelector("rh-breadcrumbs");
}

describe(ActionHeaderComponent.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ActionHeaderModule, RouterTestingModule]
    }).compileComponents();
    fixture = TestBed.createComponent(ActionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`Should receive breadcrumbs (@Input breadcrumbsPaths)`, () => {
    component.breadcrumbsPaths = BREADCRUMBS_PATHS;
    fixture.detectChanges();
    expect(breadcrumbs().paths).toEqual(BREADCRUMBS_PATHS);
    expect(breadcrumbs().paths.length).toBe(BREADCRUMBS_PATHS.length);
  });

  it(`Should receive a title (@Input headerTitle)`, () => {
    const title = faker.random.word();
    component.headerTitle = title;
    fixture.detectChanges();
    const headElement: HTMLHeadElement = fixture.nativeElement.querySelector("h1");
    expect(headElement.textContent).toBe(title);
  });

  it(`Should receive a label button (@Input actionButtonLabel)`, () => {
    const label = faker.random.word();
    component.actionButtonLabel = label;
    fixture.detectChanges();
    expect(actionButton().textContent.trim()).toBe(label);
  });

  it(`Should start with action button enabled`, () => {
    expect(actionButton().disabled).toBeFalsy();
  });

  it(`Should set save action disabled to true`, () => {
    component.isActionButtonDisabled = true;
    fixture.detectChanges();
    expect(actionButton().disabled).toBeTruthy();
  });

  it(`Should emit click event when action button is clicked (@Output actionButtonClicked)`, () => {
    spyOn(component.actionButtonClicked, "emit");
    actionButton().dispatchEvent(new Event("clicked"));
    expect(component.actionButtonClicked.emit).toHaveBeenCalled();
  });

  it(`Should call ${ActionHeaderComponent.prototype.navigateToPath.name} when pathClicked is triggered`, () => {
    const url = faker.internet.url();
    spyOn(component, "navigateToPath");
    breadcrumbs().dispatchEvent(new CustomEvent("pathClicked", { detail: url }));
    expect(component.navigateToPath).toHaveBeenCalled();
  });

  it(`Should navigate to the correspondent router when pathClicked is triggered`, () => {
    const url = faker.internet.url();
    spyOn(component.router, "navigate");
    breadcrumbs().dispatchEvent(new CustomEvent("pathClicked", { detail: url }));
    expect(component.router.navigate).toHaveBeenCalledWith([url]);
  });
});
