import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styles:[]
})
export class AppComponent {

   items=["soyaben"];
  
   curr='';
   onInput(event){
    this.curr=event.target.value;
   }

   addItem(){
     if(this.curr!=''){
       this.items.push(this.curr);
     }
   }
   onDelete(index){
      this.items.splice(index,1);
   }
  }