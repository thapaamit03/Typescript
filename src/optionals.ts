//optional check parameter

function greetPerson(name?:string):string{
    const result=name?name?.toLocaleUpperCase():"guest"  

    return `hello ${result}`;
}
greetPerson()
greetPerson("sangam")


//default parameter

const  greetPersonDefault=(name:string="user"):string=> `hello${name}`



greetPersonDefault()

greetPersonDefault("hari")

//order is most during passing argument to function
function connect(host:string,port?:number,secure?:boolean){
        const p=port??3000; //optional chechking
        const s=secure??false
    return `connect ${host} ${p} ${s}`
}

connect('localhost',4000,true)