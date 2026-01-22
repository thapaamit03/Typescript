
//strictNullcheck
// let title:string="introduction"
// title=undefined

let subTitle:string|undefined="blog post"

subTitle=undefined

//void doesnt return value
function log(msg:string):void{

    console.log(msg);
    
}

//never returns 
function errorMessage(msg:string):never{
   throw new Error(msg);
}


//dont use any 
const anyValue=JSON.parse('{"x":10}')   //creates runtime error