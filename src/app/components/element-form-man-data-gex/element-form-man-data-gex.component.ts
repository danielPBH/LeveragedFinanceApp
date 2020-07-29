import { Component, OnInit } from '@angular/core';
import { ManualdatauploadService } from '../../services/manualdataupload.service'

@Component({
  selector: 'app-element-form-man-data-gex',
  templateUrl: './element-form-man-data-gex.component.html',
  styleUrls: ['./element-form-man-data-gex.component.css']
})
export class ElementFormManDataGexComponent implements OnInit {

  constructor(public service: ManualdatauploadService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.service.formGlobalVsExposure.valid){
      this.service.insertGlobalVsExposure(this.service.formGlobalVsExposure.value);
      //this.service.form.reset();
      //this.service.initializeFormGroup();
    }
  }

}
