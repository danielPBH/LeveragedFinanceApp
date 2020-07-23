import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDialogTableComponent } from './element-dialog-table.component';

describe('ElementDialogTableComponent', () => {
  let component: ElementDialogTableComponent;
  let fixture: ComponentFixture<ElementDialogTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementDialogTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDialogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
