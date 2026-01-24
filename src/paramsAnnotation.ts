

function fun1(a:number,b:number):number{

    return a+b
}


const nums=[20,30,40];

const doubled=nums.map(n=>n*2)  //n as number

const anotherDoubled=(n:number)=>n*2;       //always prefere annotation


type point={
    x:number,
    y:number
}


function distanceFromOrigin(p:point):number{

    return Math.hypot(p.x,p.y);
}

distanceFromOrigin({x:20,y:30})