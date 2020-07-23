import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementFormManDataUpComponent } from './element-form-man-data-up.component';

describe('ElementFormManDataUpComponent', () => {
  let component: ElementFormManDataUpComponent;
  let fixture: ComponentFixture<ElementFormManDataUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementFormManDataUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementFormManDataUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
