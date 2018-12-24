import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/************************************************ */
/**Angular Material Modules */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/************************************************ */

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';


/************************************************ */
/*Firebae modules */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule, AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


/************************************************ */
import { environment } from 'src/environments/environment';
import { PostsModule } from './posts/posts.module';



const routes:Routes=[
  {path:'', redirectTo:'/blog', pathMatch:'full'},
  {path:'', loadChildren:'./posts/posts.module.ts#PostsModule'}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    CoreModule,
    SharedModule,
    PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
