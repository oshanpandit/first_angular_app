import { Component,OnInit} from '@angular/core';
import { loggingService } from './logging.service';
import { createService } from './create.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

   items=[];
   curr='';

   constructor(private loggingService:loggingService,private createService:createService){}
   
   ngOnInit(){
      this.items=this.createService.items;
   }
  
  
   onInput(event){
    this.curr=event.target.value;
   }

   addItem(){
     if(this.curr!=''){
      this.createService.onAdding(this.curr);
     }
   }
  //  onDelete(index){
     
  //     this.createService.onRemove(index);
  //  }

  }