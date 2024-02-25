import { Component } from '@angular/core';
import { loggingService } from '../logging.service';
import { createService } from '../create.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
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
export class MainComponent {

  items=[];
  curr="";
  
  constructor(private loggingService:loggingService,private createService:createService){}
  
  ngOnInit(){
     this.items=this.createService.items;
  }
  onDelete(index){
    
     this.createService.onRemove(index);
  }
  
  onInput(event){
   this.curr=event.target.value;
  }

  addItem(){
    if(this.curr!=''){
     this.createService.onAdding(this.curr);
    }
  }
 

}
