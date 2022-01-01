import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { ActionHeader } from "./contract/action-header";

@Component({
  selector: "app-action-header",
  templateUrl: "./action-header.component.html",
  styleUrls: ["./action-header.component.scss"]
})
export class ActionHeaderComponent extends ActionHeader {
  constructor(public router: Router) {
    super();
  }

  navigateToPath(event): void {
    this.router.navigate([event.detail]);
  }
}
