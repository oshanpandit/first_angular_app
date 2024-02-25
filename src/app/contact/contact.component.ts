import { Component,OnInit} from '@angular/core';
import { loggingService } from '../logging.service';
import { createService } from '../create.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { contactService } from './contact.service';
import { Injectable } from '@angular/core';
import { response } from 'express';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles:[`
  .entry{
    margin: 0 auto; 
    max-width: 70%; 
    text-align: center; 
    background: #ADD8E6; 
    border-radius: 20px; 
    padding: 20px;
   }
  `]
})
export class ContactComponent {

  items=[];
  curr="";
  
  constructor(private loggingService:loggingService,private createService:createService,private http:HttpClient,private contactServive:contactService){
    // console.log("constructor");
  }

  ngOnInit(){
    this.contactServive.fetchContacts().subscribe(response =>{
       this.items=response;
    });
  }
 
    addItem(){
    if(this.curr!=''){
       this.contactServive.createAndStoreContact(this.curr).subscribe(response=>{
         this.items.push({text:this.curr,id:response});
       },error=>{
          console.log(error);
       });
    }
  }
    onDelete(index){
       const contactId=this.items[index].id;
       this.contactServive.deleteContact(contactId);
       this.items.splice(index,1);
    }
}











