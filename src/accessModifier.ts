

 class BankAccount {
    public owner:string

    private balance=0;

    #otp=44033

    constructor(owner:string){
        this.owner=owner;
    }
    deposite(amt:number){
        if(amt<0) throw new Error('amount must be positive')
        this.balance+=amt;

    }
    getBalance(){
        return this.balance
    }
    verifyOtp(code:number){
        return this.#otp===code;   //only accessible inside the class
    }
}

const acc=new BankAccount('sujal')
acc.deposite(5000)
// acc.balance is private access within class only


//protected -> accessed within class or subclass not outside class

class animal{
    protected energy=20;

    eat(amt:number){
        this.energy+=amt
    }
}

class dog extends animal{

    run(){
        this.energy-=10;
    }
    status(){
        return this.energy
    }
}

const d=new dog()
d.eat(20)
d.run()
// d.energy cannot accessed 