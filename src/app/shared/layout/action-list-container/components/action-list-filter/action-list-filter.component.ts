import { Component, OnInit } from "@angular/core";
import { SelectOptions } from "@innove/rh-core-ui/dist/types/components/select/types/select-options";

import { ActionListFilterFormService } from "./services/action-list-filter-form.service";

@Component({
  selector: "app-action-list-filter",
  templateUrl: "./action-list-filter.component.html",
  styleUrls: ["./action-list-filter.component.scss"],
  providers: [ActionListFilterFormService]
})
export class ActionListFilterComponent implements OnInit {
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

  constructor(public formService: ActionListFilterFormService) { }

  ngOnInit(): void {
    this.formService.buildForm();
  }

  updateFieldValue(field: string, event: any): void {
    console.log("OLA");
    this.formService.updateFieldValue(field, event.detail);
  }
}
