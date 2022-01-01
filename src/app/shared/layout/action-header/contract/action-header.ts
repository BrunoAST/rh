import { Input, Output, EventEmitter, Directive } from "@angular/core";
import { BreadcrumbsPaths } from "@innove/rh-core-ui";

@Directive()
export class ActionHeader {
  @Input() breadcrumbsPaths!: BreadcrumbsPaths[];
  @Input() headerTitle!: string;
  @Input() isActionButtonDisabled = false;

  @Output() actionButtonClicked: EventEmitter<void> = new EventEmitter<void>();
}
