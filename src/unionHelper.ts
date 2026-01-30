// Exclude<U,V> remove from  u those memeber assignable to v
//Extract<U,V> keep from U those memebers assignable to v

type eventType1='click'|'hover'|'submit'|'keydown'|'keyup'

type eventType2=Exclude<eventType1,'click'>  //remove click event 

function handelEvent(e:eventType2){
    return e;
}
// handelEvent('click') removed
handelEvent('keydown')
handelEvent('hover')
handelEvent('keyup')
handelEvent('submit')


type action1='read'|'update'|'delete'|'create'
type action2=Extract<action1,'create'|'update'>

function handleAction(a:action2){
    console.log(a);
}
handleAction('create');
handleAction('update');


type mayBeNumber=number|null|undefined;
type clearNumber=NonNullable<mayBeNumber> //it discard null and undefined

function square(x:clearNumber){
    return x*x
}
square(10);
// square(null)