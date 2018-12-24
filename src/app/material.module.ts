import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    MatButtonModule, MatExpansionModule, MatInputModule, MatProgressBarModule, MatSnackBarModule, MatToolbarModule
  ],
  exports: [
    MatButtonModule, MatExpansionModule, MatInputModule, MatProgressBarModule, MatSnackBarModule, MatToolbarModule
  ]
})
export class MaterialModule { }
