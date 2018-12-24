import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  imports: [
    MatButtonModule, MatToolbarModule
  ],
  exports: [
    MatButtonModule, MatToolbarModule
  ]
})
export class MaterialModule { }
