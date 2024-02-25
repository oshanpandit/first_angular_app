import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject,Subscription } from "rxjs";
import { User } from "./user.model";
import { map, tap } from "rxjs/operators";


export interface AuthResponseData{
    idToken:string;
    email:string;	
    refreshToken:string;	
    expiresIn:string;
    localId:string;
    registered:boolean;
}

@Injectable({providedIn:'root'})

export class AuthService{

user=new Subject<User>();

constructor(private http:HttpClient){}

    signUp(email:string,password:string){

        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAFQ1j26p56ahHjJLKI9ZBHMkf_U8iXvGE',
          {
            email:email,
            password:password,
            returnSecureToken:true

          }
        )
        
    }

    signIn(email:string,password:string){

        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAFQ1j26p56ahHjJLKI9ZBHMkf_U8iXvGE',
        {
            email:email,
            password:password,
            returnSecureToken:true
           }
        )
        .pipe(tap(resData=>{
            this.handleAuthentication(resData.email,resData.localId,resData.idToken,+resData.expiresIn);
        }))
         
    }

    handleAuthentication(email:string,userId:string,token:string,expiresIn:number){
        const expirationDate=new Date(new Date().getTime()+expiresIn * 1000);
        const user=new User(email,
            userId,
            token,
            expirationDate
            );
            this.user.next(user);
    }

}