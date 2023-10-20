import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../service/app-service.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-farm-register',
  templateUrl: './farm-register.component.html',
  styleUrls: ['./farm-register.component.css']
})
export class FarmRegisterComponent {

  f1Saved = false;
  f1IsFormValid = true;

  f2Saved = false;
  f2IsFormValid = true;

  constructor(private _formBuilder: FormBuilder, private appServ: AppService, private dialog: MatDialog) { }

  muombajiForm = this._formBuilder.group({
    id: [''],
    name: ['', Validators.required],
    gender: ['', Validators.required],
    phone: ['', Validators.required],
    district: ['', Validators.required],
    shehia: ['', Validators.required],
    street: ['', Validators.required],
    // zanId: ['', Validators.required],
  });

  muombewaForm = this._formBuilder.group({
    id: [sessionStorage.getItem("muombaji")],
    name: ['', Validators.required],
    gender: ['', Validators.required],
    phone: ['', Validators.required],
    district: ['', Validators.required],
    shehia: ['', Validators.required],
    street: ['', Validators.required],
    zanId: ['', Validators.required],
    // muombaji: [sessionStorage.getItem("muombaji")]
  });
  isLinear = false;

  saveApp1() {
    if (!this.muombajiForm.valid) {
      this.f1IsFormValid = false;
    }else{

      this.appServ.registerApplications1(this.muombajiForm.value).subscribe((res: any) => {
        
        sessionStorage.setItem("muombaji", res.id);
        this.f1Saved = true;
        this.muombajiForm.reset();
      });
    }
  }

  saveApp2() {
    if (!this.muombewaForm.valid) {
      this.f2IsFormValid = false;
    }else{
      this.appServ.registerApplications2(this.muombewaForm.value).subscribe((res: any) => {
        this.f2Saved = true;
        this.muombewaForm.reset();
        sessionStorage.clear();
      });
    }
  }

}
