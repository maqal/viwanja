import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppService } from '../service/app-service.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent {

  constructor(private fb: FormBuilder, private appSer: AppService){}

  showUserDetails = false;
  userData: any;
  ukaguzi1: any

  searchForm = this.fb.group({
    id: ['']
  });

  ukaguzi1Form = this.fb.group({
    id: [''],
    comment: ['']
  });

  ukaguzi2Form = this.fb.group({
    id: [''],
    comment: ['']
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

  findUser(){
    let zanId = this.searchForm.value.id;
    if(this.searchForm.valid){
      this.appSer.getApp1ById(zanId).subscribe((res: any) => {
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

        this.viewUkaguzi1();
        this.viewUkaguzi2();
      })
    }
  }

  viewUkaguzi1(){
    let id = sessionStorage.getItem("id");
      this.appSer.viewChecking1(id).subscribe((res: any) => {
       this.ukaguzi1Form.setValue({
        id: res.id,
        comment: res.comment
       })
        
      })
    }

    viewUkaguzi2(){
      let id = sessionStorage.getItem("id");
        this.appSer.viewChecking2(id).subscribe((res: any) => {
         this.ukaguzi2Form.setValue({
          id: res.id,
          comment: res.comment
         })
          
        })
      }
}