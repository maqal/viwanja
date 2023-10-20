import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultComponent } from './default/default.component';
import { MaterialModule } from 'src/material.module';
import { FarmRegisterComponent } from './farm-register/farm-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashComponent } from './dash/dash.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { HomeComponent } from './home/home.component';
import { ApproveComponent } from './approve/approve.component';
import { Ukaguzi1Component } from './ukaguzi1/ukaguzi1.component';
import { Ukaguzi2Component } from './ukaguzi2/ukaguzi2.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    FarmRegisterComponent,
    DashComponent,
    ViewDetailsComponent,
    HomeComponent,
    ApproveComponent,
    Ukaguzi1Component,
    Ukaguzi2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
