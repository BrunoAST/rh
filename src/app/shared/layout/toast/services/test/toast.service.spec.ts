import { TestBed } from "@angular/core/testing";
import * as faker from "faker";

import { ToastService } from "../toast.service";

let service: ToastService;

describe(ToastService.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastService]
    });
    service = TestBed.inject(ToastService);
  });

  it("Should show toast", () => {
    service.show(faker.random.word(), faker.random.word(), "info");
    expect(document.querySelector("rh-toast")).toBeDefined();
  });

  it("Should call show with correct params", () => {
    const header = faker.random.word();
    const message = faker.random.words();
    const spy = spyOn(service, "show");
    service.show(header, message, "info");
    expect(spy).toHaveBeenCalledWith(header, message, "info");
  });
});
