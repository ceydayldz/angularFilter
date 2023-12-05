import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { UserstableModule } from '../userstable/userstable.module';

@NgModule({
  declarations: [
    HomeComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    UserstableModule
  
    
    
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
