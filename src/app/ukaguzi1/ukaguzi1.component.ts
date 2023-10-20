import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppService } from '../service/app-service.service';

@Component({
  selector: 'app-ukaguzi1',
  templateUrl: './ukaguzi1.component.html',
  styleUrls: ['./ukaguzi1.component.css']
})
export class Ukaguzi1Component {

  constructor(private fb: FormBuilder, private appSer: AppService){}

  showUserDetails = false;
  userData: any;
  zanId: any;

  searchForm = this.fb.group({
    id: ['']
  });

  muombajiForm = this.fb.group({
    id: [''],
    name: [''],
    gender: [''],
    phone: [''],
    district: [''],
    shehia: [''],
    street: ['',],
  });

  ukaguzi1Form = this.fb.group({
    id: [sessionStorage.getItem("id")],
    comment: [''],
  });

  findUser(){
    this.zanId = this.searchForm.value.id;
    if(this.searchForm.valid){
      this.appSer.getApp1ById(this.zanId).subscribe((res: any) => {
        this.userData = res;
        this.showUserDetails = true;
        this.muombajiForm.setValue( {
          id: this.userData.id,
          name: this.userData.name,
          gender: this.userData.gender,
          phone: this.userData.phone,
          district: this.userData.district,
          shehia: this.userData.shehia,
          street: this.userData.street,
        });
        sessionStorage.setItem("id", this.userData.id);

      });
    }
  }

  saveChecking(){
    console.log(this.ukaguzi1Form.value);
    if(this.ukaguzi1Form.valid){
      this.appSer.confirmChecking1(this.ukaguzi1Form.value).subscribe((res: any) => {
        
      })
    }
    
  }
}
