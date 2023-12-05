import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserstableComponent } from './userstable.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
    imports: [CommonModule,ReactiveFormsModule],
    declarations: [UserstableComponent],
    exports: [UserstableComponent],
  })
  export class UserstableModule {}