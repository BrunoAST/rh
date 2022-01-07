import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { ActionListContainerComponent } from "../action-list-container.component";
import { ActionListContainerModule } from "../action-list-container.module";

let component: ActionListContainerComponent;
let fixture: ComponentFixture<ActionListContainerComponent>;

describe(ActionListContainerComponent.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ActionListContainerModule, RouterTestingModule]
    }).compileComponents();
    fixture = TestBed.createComponent(ActionListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`Should render component`, () => {
    expect(component).toBeDefined();
  });
});
