import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { SideBarContainerComponent } from "../side-bar-container.component";
import { SideBarContainerModule } from "../side-bar-container.module";
import { MENU_ITEMS_MOCK } from "./menu-items-mock";

let fixture: ComponentFixture<SideBarContainerComponent>;
let component: SideBarContainerComponent;

const sideBarElement = (): HTMLRhSideBarElement => {
  return fixture.nativeElement.querySelector("rh-side-bar");
}

describe(SideBarContainerComponent.name, () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SideBarContainerModule,
        RouterTestingModule
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(SideBarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`Should set menu items`, () => {
    component.menuItems = MENU_ITEMS_MOCK;
    fixture.detectChanges();
    expect(sideBarElement().menuItems).toEqual(MENU_ITEMS_MOCK);
    expect(sideBarElement().menuItems.length).toBe(MENU_ITEMS_MOCK.length);
  });

  it(`Should call ${SideBarContainerComponent.prototype.onItemClicked.name} when itemClicked is triggered`, () => {
    const expectedItem = MENU_ITEMS_MOCK[0];
    spyOn(component, "onItemClicked");
    sideBarElement().dispatchEvent(new CustomEvent("itemClicked", { detail: expectedItem.url }));
    expect(component.onItemClicked).toHaveBeenCalled();
  });

  it(`Should navigate to the correspondent router when itemClicked is triggered`, () => {
    const expectedItem = MENU_ITEMS_MOCK[0];
    spyOn(component.router, "navigate");
    sideBarElement().dispatchEvent(new CustomEvent("itemClicked", { detail: expectedItem.url }));
    expect(component.router.navigate).toHaveBeenCalledWith([expectedItem.url]);
  });
});
