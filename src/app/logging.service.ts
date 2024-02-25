export class loggingService{

    hasLogged=false;

     onAdd(call:string){
        console.log("Task Has Been Added "+call);
     }
     onRemove(call:string){
         console.log("Task Has Been Removed "+call);
     }
}