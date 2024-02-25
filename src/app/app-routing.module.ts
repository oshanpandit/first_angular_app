import { NgModule } from "@angular/core";
import { HighlightDirective } from './highlight/highlight.directive';
import { MainComponent } from './shopping/main.component';
import { loggingService } from './logging.service';
import { createService } from './create.service';
import { TodoComponent } from './todo/todo.component';
import { ContactComponent } from './contact/contact.component';
import {Routes,RouterModule} from '@angular/router';
import { UsersComponent} from './contact/users/users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./home/auth.guard";




const appRoutes:Routes=[
     {path:'',component:HomeComponent},
    {path:'shopping',component:MainComponent},
    {path:'contact',component:ContactComponent},
    {path:'todo',component:TodoComponent},
    // {path:'contact/:id/:name',component:UsersComponent},
    {path:'not-found',component:PageNotFoundComponent},
    {path:'**',redirectTo:'not-found'}
  ];

 @NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
      ],
      exports:[RouterModule]
 })
export class AppRoutingModule{

}