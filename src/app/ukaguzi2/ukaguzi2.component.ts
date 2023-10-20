import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppService } from '../service/app-service.service';

@Component({
  selector: 'app-ukaguzi2',
  templateUrl: './ukaguzi2.component.html',
  styleUrls: ['./ukaguzi2.component.css']
})
export class Ukaguzi2Component {

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

  ukaguziForm = this.fb.group({
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
    console.log(this.ukaguziForm.value);
    if(this.ukaguziForm.valid){
      this.appSer.confirmChecking2(this.ukaguziForm.value).subscribe((res: any) => {
        this.ukaguziForm.reset();
      });
    }
    
  }
}
