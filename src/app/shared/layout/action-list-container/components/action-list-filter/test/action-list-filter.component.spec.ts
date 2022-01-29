import { ComponentFixture, TestBed } from "@angular/core/testing";
import * as faker from "faker";

import { ActionListFilterComponent } from "../action-list-filter.component";
import { ActionListFilterModule } from "../action-list-filter.module";

let component: ActionListFilterComponent;
let fixture: ComponentFixture<ActionListFilterComponent>;

describe(ActionListFilterComponent.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ActionListFilterModule]
    }).compileComponents();
    fixture = TestBed.createComponent(ActionListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Items per page select should start with value equals to 10", () => {
    const selectItemsPerPage = fixture.nativeElement.querySelector("rh-select");
    expect(selectItemsPerPage.value).toBe("10");
  });

  it("Should emit the filtered data via form submit", () => {
    const filteredDataSpy = spyOn(component.filteredData, "emit");
    const filter = faker.random.words();
    const filterInput = fixture.nativeElement.querySelector("rh-input-text");
    const form = fixture.nativeElement.querySelector("form");
    filterInput.dispatchEvent(new CustomEvent("valueUpdated", { detail: filter }));
    form.dispatchEvent(new KeyboardEvent("keyup", { key: "Enter" }));
    fixture.detectChanges();
    expect(filteredDataSpy).toHaveBeenCalledWith({ filter, itemsPerPage: "10" });
  });

  it("Should emit the filtered data via button click", () => {
    const filteredDataSpy = spyOn(component.filteredData, "emit");
    const filter = faker.random.words();
    const filterInput = fixture.nativeElement.querySelector("rh-input-text");
    const button = fixture.nativeElement.querySelector("rh-button");
    filterInput.dispatchEvent(new CustomEvent("valueUpdated", { detail: filter }));
    button.dispatchEvent(new CustomEvent("clicked"));
    fixture.detectChanges();
    expect(filteredDataSpy).toHaveBeenCalledWith({ filter, itemsPerPage: "10" });
  });
});
