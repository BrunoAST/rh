import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MainContainerRoutingModule } from "./main-container-routing.module";
import { SideBarContainerModule } from "../shared/layout/side-bar-container/side-bar-container.module";
import { MainContainerComponent } from "./main-container.component";

@NgModule({
  imports: [
    CommonModule,
    MainContainerRoutingModule,
    SideBarContainerModule
  ],
  declarations: [MainContainerComponent]
})
export class MainContainerModule { }
