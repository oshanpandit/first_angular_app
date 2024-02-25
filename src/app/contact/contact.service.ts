import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map, tap } from "rxjs/operators";
import { contact } from "./contact.model";
import { AuthService } from "../home/home.service";
import { take } from "rxjs/operators";



@Injectable({providedIn:'root'})
export class contactService{

     constructor(private http:HttpClient,private AuthService:AuthService){}

     createAndStoreContact(curr:string){

          return this.http.post<{name:string}>('https://my-first-app-d94b2-default-rtdb.firebaseio.com/contacts.json', { text: curr })
          // this.fetchContacts();
         }
     
     fetchContacts(){

     return this.http.get<{[key:string]:contact}>('https://my-first-app-d94b2-default-rtdb.firebaseio.com/contacts.json')
      .pipe(map(responseData=>{
      const dataArray:contact[]=[];
      for(let key in responseData){
        const member={...responseData[key],id:key};
        dataArray.push(member);
      }
        console.log(dataArray);
        return dataArray;
        
    }));
  }
        deleteContact(contactId) {
            const deleteUrl = `https://my-first-app-d94b2-default-rtdb.firebaseio.com/contacts/${contactId}.json`;
            return this.http.delete(deleteUrl).subscribe();
            this.fetchContacts();
        }

}
