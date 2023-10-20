import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  apiUrl = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  registerApplications1(data: any){
    return this.http.post(this.apiUrl+"/muombaji", data);
  }

  registerApplications2(data: any){
    return this.http.post(this.apiUrl+"/muombewa", data);
  }

  getUserByUsername(username: any){
    return this.http.get(this.apiUrl+`/user/${username}`);
  }

  getAllApps(){
    return this.http.get(this.apiUrl+"/muombaji");
  }

  getApp1ById(zanId: any){
    return this.http.get(`${this.apiUrl}/muombaji/${zanId}`)
  }

  getUserRole(){
    return sessionStorage.getItem('userRole') != null ? sessionStorage.getItem('userRole')?.toString():'';
  }

  isLoggedIn(){
    return sessionStorage.getItem('username') != null;
  }

  confirmChecking1(data: any){
    return this.http.post(`${this.apiUrl}/ukaguzi1`, data);
  }


  confirmChecking2(data: any){
    return this.http.post(`${this.apiUrl}/ukaguzi2`, data);
  }

  viewChecking1(id: any){
    return this.http.get(`${this.apiUrl}/ukaguzi1/${id}`);
  }

  viewChecking2(id: any){
    return this.http.get(`${this.apiUrl}/ukaguzi2/${id}`);
  }
}
