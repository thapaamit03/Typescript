//key value type key of type string and value will be number
type numberDist={[k:string] : number} 

const counter:numberDist={
}

counter["like"]=100;
counter['share']=1000;
counter['comment']=50

 //tight and safer and must only have finite keys
type metric=Record<'likes'|'views'|'share',number> 
const mm:metric={'likes':10,'share':20,'views':200}

//dynamic key in run time
const priceMap=new Map<string,number>()

priceMap.set('like',100)
priceMap.set('comment',40)


