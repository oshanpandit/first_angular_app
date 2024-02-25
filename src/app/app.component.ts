import { Component,OnInit} from '@angular/core';
import { loggingService } from './logging.service';
import { createService } from './create.service';
import { AuthService } from './home/home.service';
import { Subject,Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl:'./app.component.css'
})
export class AppComponent {

  constructor(private AuthService:AuthService,private router:Router){};
  userSub:Subscription;
  isAuthenticated=false;
  ngOnInit(){
     this.userSub=this.AuthService.user.subscribe(user=>{
       this.isAuthenticated=!user ? false : true;
       console.log(user);

     })
  }
  changeAuth(){
    this.isAuthenticated=false;
    this.router.navigate(['/']);
  }

}