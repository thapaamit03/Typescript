
function makeRange(...args:[start:number,end:number,step?:number]):number[]{

    const [start,end,step=1]=args;
    const out=[]
    for(let n=start;n<=end;n+=step) out.push(n);

    return out
 }

 makeRange(10,20,5)


 function draw(x:number,y:number):number{
    return x+y;
 }

 const point=[20,30]
//  draw(...point)       not a fixed [number,number] tuple

 const fixedPoint=[20,30] as const; //readonly
 draw(...fixedPoint)