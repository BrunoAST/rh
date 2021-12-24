import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { OPTIONS } from "./constants/options";

@Component({
  selector: "app-side-bar-container",
  templateUrl: "./side-bar-container.component.html"
})
export class SideBarContainerComponent {
  menuItems = OPTIONS;

  constructor(public router: Router) { }

  onItemClicked(event: any): void {
    this.router.navigate([event.detail]);
  }
}
