import { Component } from '@angular/core';
import { loggingService } from '../logging.service';
import { createService } from '../create.service';
import {Router} from '@angular/router';
import { Subject,Subscription } from 'rxjs';import { AuthService } from '../home/home.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl:'./todo.component.css'
})
export class TodoComponent {

  items:{text:string,status:string}[]=[];
  curr="";
  type='';
  
  constructor(private loggingService:loggingService,private createService:createService,private Router:Router){}

  ngOnInit(){
  }

  onDelete(index){
    
     this.items.splice(index,1);
  }
  
  onInput(event){
   this.curr=event.target.value;
  }

  addItem(val:string){
    if(this.curr!=''){
      this.items.push({text:this.curr,status:val});
    }
  }

  onRedirect(){
    this.Router.navigate(['shopping']);
  }

}
