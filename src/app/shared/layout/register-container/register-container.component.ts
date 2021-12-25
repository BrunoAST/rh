import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
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

  constructor(public router: Router) { }

  emitOnSaveClicked(): void {
    this.saveClicked.emit();
  }

  navigateToPath(event): void {
    this.router.navigate([event.detail]);
  }
}
