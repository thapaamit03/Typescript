

type one ={role:'admin',permission:string[]}
type two={role:'user',expireAt:Date}

type user=one | two;

function verifyUser(u:user){
    if('permission' in u){
        return `Admin ${u.permission.join(",")}`
    }else{
        return `user ${u.expireAt.getTime()}`
    }
}

verifyUser({role:'admin',permission:['update']})
verifyUser({role:'user',expireAt:new Date()})


//optional chaining 

type example={
    name:string,
    contact?:{email:string}
}

const a1:example={
    name:"john"
}

const a2:example={
    name:"hari",
    contact:{
        email:"hari@gmail.com"
    }
}

const contact=a1?.contact?.email;   //optional chaining avoid runtime error

// nullish ??  or ||

// ?? => uses the right hand default only when left hand is null or undefined
// || => uses the right hand default only when left is falsy value("",0,undefined,null,NaN)

const example:number | null=0;

const s1=example ?? 10; //it keep 0 and it only takes 10 if example is null or undefined

const secExample:string | undefined="";

const s2=secExample || 10; //it keep 10 because secExample is falsy valuse