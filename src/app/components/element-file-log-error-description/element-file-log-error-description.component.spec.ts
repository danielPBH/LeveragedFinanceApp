import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementFileLogErrorDescriptionComponent } from './element-file-log-error-description.component';

describe('ElementFileLogErrorDescriptionComponent', () => {
  let component: ElementFileLogErrorDescriptionComponent;
  let fixture: ComponentFixture<ElementFileLogErrorDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementFileLogErrorDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementFileLogErrorDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
