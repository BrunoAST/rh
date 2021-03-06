import { Component, Input } from "@angular/core";
import { ActionListFieldConfig } from "@innove/rh-core-ui/dist/types/components/action-list/types/action-list-field-config";

import { ActionHeader } from "../action-header/contract/action-header";
import { ActionListFilterData } from "./components/action-list-filter/types/action-list-filter-data";

@Component({
  selector: "app-action-list",
  templateUrl: "./action-list-container.component.html",
  styleUrls: ["./action-list-container.component.scss"]
})
export class ActionListContainerComponent extends ActionHeader {
  @Input() searchInputPlaceholderText!: string;
  @Input() fieldConfigs: ActionListFieldConfig[] = [];
  @Input() items: any[] = [];

  filterData(filteredData: ActionListFilterData): void {
    console.log("FILTER: ", filteredData);
  }
}
