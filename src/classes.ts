

class user20{
    id:string
    name:string
    email?:string

    constructor(id:string,name:string,email?:string){
        this.id=id;
        this.name=name;
        if(email)this.email=email;  //good practise
    }

}

const result1=new user20('101','amit')
    