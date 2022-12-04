import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { InputDateComponent } from '../shared/components/input-date/input-date.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    NgIf,
    FormRoutingModule,
    InputDateComponent,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class FormModule { }
