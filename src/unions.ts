
function getId(id:string|number){

    if(typeof id==="string"){
        id.toLowerCase()
    }else{
        id.toFixed(2)
    }
}

getId(10);
getId("amit")

//object union

type admin={
    role:'admin',
    permission:string[]
}

type customer={
    role:'customer',
    points:number
}

function checkUser(u:admin|customer){
    if(u.role === 'admin'){
        console.log(u.role);
        
    }else{
        console.log(u.role);   
    }
}
checkUser({role:"admin",permission:["update","delete"]})


function describeUserWithInOperator(u:admin|customer){
    if('permission' in u){
        console.log(u.role,'admin');
        
    }else{
        console.log(u.role,'customer');
        
    }
}

//array of union and union of array

const arrayOfUnion:(string|number)[]=[1,"hello",2,"simple"]; //either string or number

const unionOfArrays:string[]|number[]=Math.random() < 0.5 ? ["hello","mewmew"]:[1,2,3] //both string or both number
