import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { HighlightDirective } from './highlight/highlight.directive';
import { MainComponent } from './shopping/main.component';
import { loggingService } from './logging.service';
import { createService } from './create.service';
import { TodoComponent } from './todo/todo.component';
import { ContactComponent } from './contact/contact.component';
import {Routes,RouterModule} from '@angular/router';
import { UsersComponent} from './contact/users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { contactService } from './contact/contact.service';
 


// const appRoutes:Routes=[

//   {path:'',component:HomeComponent},
//   {path:'/shopping',component:MainComponent},
//   {path:'contact',component:ContactComponent},
//   {path:'todo',component:TodoComponent},
//   {path:'contact/:id/:name',component:UsersComponent},
//   {path:'not-found',component:PageNotFoundComponent},
//   {path:'**',redirectTo:'not-found'}
// ]



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TodoComponent,
    ContactComponent,
    UsersComponent,
    PageNotFoundComponent,
    HomeComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HighlightDirective,
  ],
  providers: [loggingService,createService],
  bootstrap: [AppComponent]
})
export class AppModule { }
