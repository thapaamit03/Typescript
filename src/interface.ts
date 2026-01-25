

interface user11{
    name:string,
    id:string,
    email?:string,
    readonly createdAt:Date
}

const newUser:user11={name:"amit",id:"102",createdAt:new Date()}

interface admin1 extends user11 {
    permission: string []
}

const admin2:admin1={
    name:"admin",
    id:"1002",
    createdAt:new Date(),
    email:"admin@gmail,com",
    permission:["admin"]
}

interface adminMeta {
    meta:{
        active:boolean
    }
}

interface adminWithMeta extends admin1,adminMeta {

}

const adminMeta:adminWithMeta={
    name:"amit",
    id:"101",
    createdAt:new Date(),
    permission:["adminMeta"],
    meta:{
        active:true
    }
}
