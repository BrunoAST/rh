import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ToastModule } from "src/app/shared/layout/toast/toast.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [CommonModule, HomeRoutingModule, ToastModule],
  declarations: [HomeComponent]
})
export class HomeModule { }
