import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { FarmRegisterComponent } from './farm-register/farm-register.component';
import { DashComponent } from './dash/dash.component';
import { AuthGuard } from './guard/auth.guard';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { HomeComponent } from './home/home.component';
import { ApproveComponent } from './approve/approve.component';
import { Ukaguzi1Component } from './ukaguzi1/ukaguzi1.component';
import { Ukaguzi2Component } from './ukaguzi2/ukaguzi2.component';

const routes: Routes = [
  { path: "", component: DefaultComponent, },
  {
    path: "dash", component: DashComponent, children: [
      { path: "", component: HomeComponent },
      { path: "view/:id", component: ViewDetailsComponent },
      { path: "farmRegister", component: FarmRegisterComponent },
      { path: "approve", component: ApproveComponent},
      { path: "ukaguzi1", component: Ukaguzi1Component},
      { path: "ukaguzi2", component: Ukaguzi2Component}

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
