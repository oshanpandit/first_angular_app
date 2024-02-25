import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; // Import the Router module
import { AuthResponseData, AuthService } from './home.service';
import { response } from 'express';
import { Observable } from 'rxjs';
import { Subject,Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent{

  constructor(private router: Router,private AuthService:AuthService) {} 

  isLoginMode=true;

  ngOnInit(){
  }

  isValid(form: NgForm) {
    return form.valid; 
   }

   handleAuthobs(authObs:Observable<AuthResponseData>){
      authObs.subscribe(response=>{
         console.log(response);
        //  this.router.navigate(['/shopping']);
      },error=>{
        alert("This Page Says "+error.error.error.message);
      })
   }

   onSubmit(form:NgForm){

         let authObs:Observable<AuthResponseData>;
         const email=form.value.email;
         const password=form.value.password;

         if(form.valid && this.isLoginMode==false){
          
           authObs=this.AuthService.signUp(email,password);

         }else if(form.valid && this.isLoginMode==true){
            authObs=this.AuthService.signIn(email,password);
         } 
          this.handleAuthobs(authObs);
          form.reset()
   }


     onSwitchMode(){
      this.isLoginMode=!this.isLoginMode;
    }
  
}
