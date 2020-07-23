import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementFileLogComponent } from './element-file-log.component';

describe('ElementFileLogComponent', () => {
  let component: ElementFileLogComponent;
  let fixture: ComponentFixture<ElementFileLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementFileLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementFileLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
