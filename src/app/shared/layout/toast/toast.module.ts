import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { ToastService } from "./services/toast.service";
import { ToastComponent } from "./toast.component";

@NgModule({
  imports: [CommonModule],
  declarations: [ToastComponent],
  providers: [ToastService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToastModule { }
