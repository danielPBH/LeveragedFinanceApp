import { Component, OnInit } from '@angular/core';
import { ManualdatauploadService } from '../../services/manualdataupload.service'

@Component({
  selector: 'app-element-form-man-data-up',
  templateUrl: './element-form-man-data-up.component.html',
  styleUrls: ['./element-form-man-data-up.component.css']
})
export class ElementFormManDataUpComponent implements OnInit {

  constructor(public service: ManualdatauploadService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.service.form.valid){
      this.service.insertManualDataUpload(this.service.form.value);
      //this.service.form.reset();
      //this.service.initializeFormGroup();
    }
  }

}
