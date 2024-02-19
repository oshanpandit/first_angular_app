export class createService{
    items=[];
    curr='';
    onAdding(arg:string){
        this.items.push(arg);
    }
    onRemove(index:number){
        this.items.splice(index,1);
    }

}