import { ApplicationRef, Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BodyInjectorService } from "src/app/shared/services/body-injector/body-injector.service";

@Component({
  selector: 'app-mock-component',
  template: ''
})
class MockComponent { }

let service: BodyInjectorService;
let fixture: ComponentFixture<MockComponent>;
let applicationRef: ApplicationRef;

describe(BodyInjectorService.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockComponent],
    }).compileComponents();
    service = TestBed.inject(BodyInjectorService);
    applicationRef = TestBed.inject(ApplicationRef);
    fixture = TestBed.createComponent(MockComponent);
  });

  it("Should attach component", () => {
    service.stackBeforeAppRoot(fixture.componentRef);
    expect(applicationRef.viewCount).toBe(1);
  });
});

