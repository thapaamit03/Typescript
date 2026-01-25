
const arr1:number[]=[1,2,3,4,5];

const arr2:Array<number>=[1,2,3,4]

const arr3:readonly number[]=[1,2,3,4]

const arr5:ReadonlyArray<number>=[20,30,40]

const arr4:(string|number)[]=[1,2,'4',5,'6']

arr1[0]=70  //mutable

// arr3[0]=80   readonly

function sum(nums:readonly number[] ):number{
    let s=0
    for(const num of nums){
        s+=num
    }
    return s
}

sum(arr1)   //passsing mutable array to readonly params is allowed



