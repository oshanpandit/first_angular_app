import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
// import {HeadComponent} from '../app_head/app_head.component';
// import { MainComponent } from './main/main.component';
// import { MainComponent } from './main/main.component';
// import {ListComponent} from '../app_list/app_list.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { MainComponent } from './main/main.component';
import { loggingService } from './logging.service';
import { createService } from './create.service';



@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [loggingService,createService],
  bootstrap: [AppComponent]
})
export class AppModule { }
