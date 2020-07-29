import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementManDataComponent } from './element-man-data.component';

describe('ElementManDataComponent', () => {
  let component: ElementManDataComponent;
  let fixture: ComponentFixture<ElementManDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementManDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementManDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
