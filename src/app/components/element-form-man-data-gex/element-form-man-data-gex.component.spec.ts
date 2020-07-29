import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementFormManDataGexComponent } from './element-form-man-data-gex.component';

describe('ElementFormManDataGexComponent', () => {
  let component: ElementFormManDataGexComponent;
  let fixture: ComponentFixture<ElementFormManDataGexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementFormManDataGexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementFormManDataGexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
