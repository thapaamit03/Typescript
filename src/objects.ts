
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

