import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CompetenceListRoutingModule } from "./competence-list-routing.module";
import { CompetenceListComponent } from "./competence-list.component";

@NgModule({
  imports: [CommonModule, CompetenceListRoutingModule],
  declarations: [CompetenceListComponent]
})
export class CompetenceListModule { }
