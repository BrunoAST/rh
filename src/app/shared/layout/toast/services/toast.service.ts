import { ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable, Injector } from "@angular/core";
import { ToastType } from "@innove/rh-core-ui/dist/types/components/toast/types/toast-type";

import { BodyInjectorService } from "src/app/shared/services/body-injector/body-injector.service";
import { ToastComponent } from "../toast.component";

@Injectable()
export class ToastService {
  private componentFactory: ComponentFactory<ToastComponent>;
  
  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private bodyInjectorService: BodyInjectorService
  ) {
    this.componentFactory = componentFactoryResolver.resolveComponentFactory(ToastComponent);
  }

  show(header: string, message: string, type: ToastType, duration = 10000): void {
    const componentRef = this.createComponentRef();
    componentRef.instance.message = message;
    componentRef.instance.header = header;
    componentRef.instance.type = type;
    componentRef.instance.duration = duration;
    this.bodyInjectorService.stackBeforeAppRoot(componentRef);
  }

  private createComponentRef(): ComponentRef<ToastComponent> {
    return this.componentFactory.create(this.injector);
  }
}
