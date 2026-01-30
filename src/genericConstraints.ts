
// <T> => constraints T so that only certain shapes are allowed
// <T extends x>
// key constraints => <k extends keyof T> - k must be key of type T


function calculateLength<T extends {length:number}>(len:T):number{
        return len.length;
}

calculateLength([1,2,3]);
calculateLength("hwllo")



//key constraints

type someUser={
    id:string,
    name:string,
    age?:number
}


function extractUser<T,K extends keyof T>(arry:T[],key:K):Array<T[K]>{
    return arry.map(item=>item[key])
}


const Someuser:someUser[]=[
    {
        id:"101",
        name:"john"
    },
    {
        id:"102",
        name:"ram",
        age:30
    }
]

extractUser(Someuser,'id')
