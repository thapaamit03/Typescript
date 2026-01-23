
type User={
    id:number,
    name:string,
    email?:string, //optional (could be absent)
    readonly createdAt:Date //cannot be reassigned
}

const user1:User={
    id:1,
    name:"amit",
    createdAt:new Date(),
    email:"amit@gmail.com"
}

// user1.createdAt=new Date(); cannot reassigned due to readonly property   

const user2:User={
    id:2,
    name:"new",
    createdAt:new Date()
}


type Count={[k:string]:number};  //key of type string and not predefined and value will be number
type Count1=Record<"likes"|"share"|"subscribe",number> //keys are predefined

const c1:Count1={"likes":1,"share":10,"subscribe":100}

const c2:Count={whatEver:10}
