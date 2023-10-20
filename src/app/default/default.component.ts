import { Component, DoCheck } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../service/app-service.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements DoCheck{

  isMenuRequired = false;
  isUsernameValid = true;
  userData: any;

  constructor(private router: Router, private fb: FormBuilder, private appServ: AppService){}

  loginForm = this.fb.group({
    username: this.fb.control("", Validators.required),
    password: this.fb.control("", Validators.required)
  });

  ngDoCheck(): void {
    let currentUrl = this.router.url;
    if(currentUrl == ""){
      this.isMenuRequired = false;
    }else{
      this.isMenuRequired = true;
    }
  }

  userLogin(){
    if(this.loginForm.valid){
      this.appServ.getUserByUsername(this.loginForm.value.username).subscribe(res => {
        this.userData = res;

        if(this.userData.password === this.loginForm.value.password){
          sessionStorage.setItem("username", this.userData.id);
          sessionStorage.setItem("userRole", this.userData.role)
          this.router.navigate(['/dash'])
        }
      });
    }else{
      if(!this.loginForm.value.username){
        this.isUsernameValid = false;
        console.log("Invalid username");

      }

    }
  }

}
