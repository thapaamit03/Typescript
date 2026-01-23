
const raw='{"id" : 1, "name":"ram" }'

const riskyUser=JSON.parse(raw) as {id:number,name:string} //not good approach


type newUser={
    id:number,
    name:string
}

function isUser(user:unknown): user is newUser{
    return (
        typeof user==="object" && user!==null && "id" in user &&
        typeof(user as any).id === "number" && "name" in user &&
        typeof(user as any).name=="string"
    )
}

const random=JSON.parse(raw) as unknown;
if(isUser(random)){
    console.log(random.name); //safer way
    
}
