import { Component } from "@angular/core";
import { ToastType } from "@innove/rh-core-ui/dist/types/components/toast/types/toast-type";

@Component({
  templateUrl: "./toast.component.html"
})
export class ToastComponent {
  message: string;
  header: string;
  type: ToastType;
  duration: number;
}
