
// generic is a function in which types are blank we defined the type based on requirement
// <T> is a placeholder
//ts automatically inferred <T> from your argument
function id<T>(x:T):T{
    return x
}

const xyx=id(10)
id("10")
id(true)
console.log(id(["hello"]));


function firstGen<T>(arr:T[]):T |undefined{
    return arr[0];
}

firstGen([1,2,3,4])     
