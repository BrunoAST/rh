import { Input, Output, EventEmitter, Directive } from "@angular/core";
import { BreadcrumbsPaths } from "@innove/rh-core-ui/dist/types/components/breadcrumbs/types/breadcrumbs-paths";

@Directive()
export class ActionHeader {
  @Input() breadcrumbsPaths!: BreadcrumbsPaths[];
  @Input() headerTitle!: string;
  @Input() actionButtonLabel!: string;
  @Input() isActionButtonDisabled = false;

  @Output() actionButtonClicked: EventEmitter<void> = new EventEmitter<void>();
}
