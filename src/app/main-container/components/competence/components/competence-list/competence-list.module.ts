import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ActionListContainerModule } from "src/app/shared/layout/action-list-container/action-list-container.module";
import { CompetenceListRoutingModule } from "./competence-list-routing.module";
import { CompetenceListComponent } from "./competence-list.component";

@NgModule({
  imports: [CommonModule, RouterModule, CompetenceListRoutingModule, ActionListContainerModule],
  declarations: [CompetenceListComponent]
})
export class CompetenceListModule { }
