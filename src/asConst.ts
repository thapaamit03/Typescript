
const roles=["user","admin","operator"] as const;  //readonly property

//derive a union from the array user|admin|operator
//treat each value as literal type not string
//literal type represent one exact value

type role=(typeof roles)[number]

// prevent invalid value

function setRoles(r:role){

    console.log(r);  
}
setRoles("user")
setRoles("admin")
setRoles("operator")