// union type (A|B)
//intersection type (A & B)

type person={
    id:string,
    name:string,
    salary:number
}

const person1:person={
    id:"1002",
    name:"anuj",
    salary:10000
}

type status="paid"|"new"|"pending";

function checkStatus(stat:status):string{

    switch (stat) {
       
         case "new":
            return "new";
         case "pending":
             return   "pending";
        case "paid":
             return   "paid";
    
        default:
            return "default";
    }
}