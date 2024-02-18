import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {HeadComponent} from '../app_head/app_head.component';
// import { MainComponent } from './main/main.component';
// import { MainComponent } from './main/main.component';
// import {ListComponent} from '../app_list/app_list.component';




@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
