//value must be everything from A and B

type inter1={
    id:string
}

type inter2={
    createdAt:Date
}

type Entity=inter1 & inter2  //must have both id anf createdAt properties

const e:Entity={
    id:'e1',
    createdAt:new Date()
}

type userName={
    id:number,
    name:string
}
type userEmail={
    email:String,
    password:String
}

type u=userName & userEmail      //intersection operator

const newOne:u={
    id:101,
    name:"ram",
    email:"ram@gmail.com",
    password:"123455"
}


