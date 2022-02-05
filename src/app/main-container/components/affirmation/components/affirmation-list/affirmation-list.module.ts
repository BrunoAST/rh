import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { ActionListContainerModule } from "../../../../../shared/layout/action-list-container/action-list-container.module";
import { AffirmationListComponent } from "./affirmation-list.component";
import { AffirmationListRoutingModule } from "./affirmation-list-routing.module";

@NgModule({
  imports: [CommonModule, RouterModule, ActionListContainerModule, AffirmationListRoutingModule],
  declarations: [AffirmationListComponent]
})
export class AffirmationListModule { }
