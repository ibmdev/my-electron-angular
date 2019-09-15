import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule
 } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule, MatButtonModule, MatIconModule, MatSelectModule
  ],
  exports: [
    MatToolbarModule, MatButtonModule, MatIconModule, MatSelectModule
  ]
})
export class MaterialModule { }
