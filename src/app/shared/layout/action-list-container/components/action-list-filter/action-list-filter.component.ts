import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { ActionListFilterFormService } from "./services/action-list-filter-form.service";
import { ITEMS_PER_PAGE_OPTIONS } from "./constants/items-per-page-options";
import { ActionListFilterData } from "./types/action-list-filter-data";

@Component({
  selector: "app-action-list-filter",
  templateUrl: "./action-list-filter.component.html",
  styleUrls: ["./action-list-filter.component.scss"],
  providers: [ActionListFilterFormService]
})
export class ActionListFilterComponent implements OnInit {
  @Input() searchInputPlaceholderText!: string;

  @Output() filteredData = new EventEmitter<ActionListFilterData>();

  options = ITEMS_PER_PAGE_OPTIONS;

  constructor(public formService: ActionListFilterFormService) { }

  ngOnInit(): void {
    this.formService.buildForm();
  }

  updateFieldValue(field: string, event: any): void {
    this.formService.updateFieldValue(field, event.detail);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.filteredData.emit(this.formService.form.getRawValue());
  }
}
