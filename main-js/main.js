class Contractor{
    constructor(name, role){
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
    }
}

class front extends Contractor {
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs and i use ${this._tech}`)
    }
}

class Back extends Contractor {
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs and i use ${this._tech}`)
    }
}


let Joana = new Contractor('joan', 'front-end')
let Ola = new front('Ola', 'front-end', 'Reat')
let Osay = new Back('osayi','Back-end','Node-js')


let agency = [Joana,Ola,Osay]

for(person of agency){
    person.sayHello()
}