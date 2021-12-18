import { Component, EventEmitter, Input, Output } from "@angular/core";
import { BreadcrumbsPaths } from "@innove/rh-core-ui";

import { IRegisterContainer } from "./contract/register-container";

@Component({
  selector: "app-register-container",
  templateUrl: "./register-container.component.html",
  styleUrls: ["./register-container.component.scss"]
})
export class RegisterContainerComponent implements IRegisterContainer {
  @Input() breadcrumbsPaths!: BreadcrumbsPaths[];
  @Input() headerTitle!: string;
  @Input() isSaveButtonDisabled = false;

  @Output() saveClicked: EventEmitter<void> = new EventEmitter<void>();

  emitOnSaveClicked(): void {
    this.saveClicked.emit();
  }
}
