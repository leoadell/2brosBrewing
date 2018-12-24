import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [
    MatButtonModule, MatExpansionModule, MatInputModule,MatSnackBarModule,  MatToolbarModule
  ],
  exports: [
    MatButtonModule, MatExpansionModule, MatInputModule,MatSnackBarModule,  MatToolbarModule
  ]
})
export class MaterialModule { }
