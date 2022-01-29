import { Component } from "@angular/core";
import { SelectOptions } from "@innove/rh-core-ui/dist/types/components/select/types/select-options";

@Component({
  selector: "app-action-list-filter",
  templateUrl: "./action-list-filter.component.html",
  styleUrls: ["./action-list-filter.component.scss"]
})
export class ActionListFilterComponent {
  options: SelectOptions[] = [
    {
      title: "10",
      value: "10"
    },
    {
      title: "20",
      value: "20"
    },
    {
      title: "30",
      value: "30"
    },
    {
      title: "50",
      value: "50"
    }
  ];
}
