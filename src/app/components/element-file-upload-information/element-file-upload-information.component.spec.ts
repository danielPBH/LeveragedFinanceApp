import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementFileUploadInformationComponent } from './element-file-upload-information.component';

describe('ElementFileUploadInformationComponent', () => {
  let component: ElementFileUploadInformationComponent;
  let fixture: ComponentFixture<ElementFileUploadInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementFileUploadInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementFileUploadInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
