import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app-service.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit{

  userData: any;
  id: any;
  constructor(private appServ: AppService, private _formBuilder: FormBuilder, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getUserDetails();
      
  }
  muombajiForm = this._formBuilder.group({
    id: [''],
    name: [''],
    gender: ['', Validators.required],
    phone: ['', Validators.required],
    district: ['', Validators.required],
    shehia: ['', Validators.required],
    street: ['', Validators.required],
    // zanId: ['', Validators.required],
  });

  getUserDetails(){
    this.appServ.getApp1ById(this.id).subscribe((res : any) => {
      this.userData = res;
      this.muombajiForm.setValue( {
        id: this.userData.id,
        name: this.userData.name,
        gender: this.userData.gender,
        phone: this.userData.phone,
        district: this.userData.district,
        shehia: this.userData.shehia,
        street: this.userData.street,
        // zanId: this.userData.zanId,

      });
      
     })

  }

}
