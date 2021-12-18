import { ComponentFixture, TestBed } from "@angular/core/testing";
import * as faker from "faker";

import { RegisterContainerComponent } from "../register-container.component";
import { RegisterContainerModule } from "../register-container.module";
import { BREADCRUMBS_PATHS } from "./breadcrumb-paths-mock";

let fixture: ComponentFixture<RegisterContainerComponent>;
let component: RegisterContainerComponent;

describe(RegisterContainerComponent.name, () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterContainerModule]
    }).compileComponents();
    fixture = TestBed.createComponent(RegisterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`Should receive breadcrumbs (@Input breadcrumbsPaths)`, () => {
    component.breadcrumbsPaths = BREADCRUMBS_PATHS;
    fixture.detectChanges();
    const breadcrumbs: HTMLRhBreadcrumbsElement = fixture.nativeElement.querySelector("rh-breadcrumbs");
    expect(breadcrumbs.paths).toEqual(BREADCRUMBS_PATHS);
    expect(breadcrumbs.paths.length).toBe(BREADCRUMBS_PATHS.length);
  });

  it(`Should receive a title (@Input title)`, () => {
    const title = faker.random.word();
    component.headerTitle = title;
    fixture.detectChanges();
    const headElement: HTMLHeadElement = fixture.nativeElement.querySelector("h1");
    expect(headElement.textContent).toBe(title);
  });

  it(`Should start with save button enabled`, () => {
    const saveButton: HTMLRhButtonElement = fixture.nativeElement.querySelector("rh-button");
    expect(saveButton.disabled).toBeFalsy();
  });

  it(`Should set save button disabled to true`, () => {
    component.isSaveButtonDisabled = true;
    fixture.detectChanges();
    const saveButton: HTMLRhButtonElement = fixture.nativeElement.querySelector("rh-button");
    expect(saveButton.disabled).toBeTruthy();
  });

  it(`Should emit click event when save button is clicked (@Output saveClicked)`, () => {
    spyOn(component.saveClicked, "emit");
    const saveButton: HTMLRhButtonElement = fixture.nativeElement.querySelector("rh-button");
    saveButton.dispatchEvent(new Event("clicked"));
    expect(component.saveClicked.emit).toHaveBeenCalled();
  });
});
