import { Component } from "@angular/core";

import { ActionHeader } from "../action-header/contract/action-header";

@Component({
  selector: "app-register-container",
  templateUrl: "./register-container.component.html",
  styleUrls: ["./register-container.component.scss"]
})
export class RegisterContainerComponent extends ActionHeader { }
