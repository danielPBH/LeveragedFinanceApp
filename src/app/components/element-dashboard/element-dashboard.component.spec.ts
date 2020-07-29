import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDashboardComponent } from './element-dashboard.component';

describe('ElementDashboardComponent', () => {
  let component: ElementDashboardComponent;
  let fixture: ComponentFixture<ElementDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
