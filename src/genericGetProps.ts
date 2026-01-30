


function getUserProp<T ,K extends keyof T>(obj:T,key:K):T[K]{
    return obj[key]
}


type un={
    id:string,
    name:string,
    email:string
}
const u1:un={
    id:"102",
    name:"amit",
    email:"amit@gmial.com"
}
getUserProp(u1,'id')

type uni={
    id:number,
    name:string,
    contact:number
}
const u2:uni={
    id:103,
    name:"hero",
    contact:9888834
}
function setUserProp<T, K extends keyof T>(obj:T,key:K,newValue:T[K]):void{

    obj[key]=newValue;

}


setUserProp(u2,'id',203)