import { Component, DoCheck, ViewChild } from '@angular/core';
import { AppService } from '../service/app-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements DoCheck {

  tableData: any
  userList: any;
  isAdminUser = false;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  tableColumns: string[] = ['id', 'name', 'phone', 'zanId', 'actions'];

  constructor(private appServ: AppService, private router: Router){
    this.loadApplications();
  }

  ngDoCheck(): void {
    if(this.appServ.getUserRole() === "ADMIN"){
      this.isAdminUser = true;
    }else{
      this.isAdminUser = false;
    }
  }

  loadApplications(){
    this.appServ.getAllApps().subscribe((res: any) => {
      this.userList = res;
      this.tableData = new MatTableDataSource(this.userList);
      this.tableData.paginator = this.paginator;
      this.tableData.sort = this.sort;
    });
  }

  toViewDetails(id: any){
    this.router.navigate(["/dash/view", id]);
    
  }

}
