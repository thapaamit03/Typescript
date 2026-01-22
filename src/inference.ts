//typescript inference means typescript automatically define or knows types

let count=0;  //ts automatically treated as number  

const arraNumber=[10,20,30,40
]

export function add(a:number,b:number):number{
    return a+b;
}

let twoType:string|number 
twoType=Math.random() > 0.5 ?"test":10;