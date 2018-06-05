// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here
class Oven{
    constructor(){
        this._cake =[]
    }

    addCake(cake){
        this._cake.push(cake)
        return this._cake
    }


    bakingTime(time){
        for(let i=0;i<=time;i++){
            // console.log(this._cake)
            for(let j=0;j<this._cake.length;j++){
                this._cake[j].bake()
            }
            if(i % 5 === 0){
               this.status()
            }
        }
      
    }

    status(){
        for(let i=0;i<this._cake.length;i++){
            console.log(`${this._cake[i]._name} menit ${this._cake[i]._time-1} : ${this._cake[i]._status}`)
        }
    }

}





class Cake{
    constructor(name,bakeTime){
        this._name = name
        this._bakeTime = bakeTime
        this._status = 'raw'
        this._time = 0
    }

    get name(){
        return this._name
    }

    get bakeTime(){
        return this._bakeTime
    }

    bake(){
        let bakingTime = this._bakeTime
        this._time++
        if(this._time >= bakingTime + 5){
            this._status = "burnt"
        }else if(this._time  >= bakingTime){
            this._status = "cooked"
        }else if(this._time >= bakingTime -5){
            this._status = "almost cooked"
        }
    }

}

class ChocolateCake extends Cake{
    constructor(name,bakeTime){
        super(name,bakeTime)
    }
}

class PeanutCake extends Cake{
    constructor(name,bakeTime){
        super(name,bakeTime)
    }
}

class CheeseCake extends Cake{
    constructor(name,bakeTime){
        super(name,bakeTime)
    }
}

let coklat = new ChocolateCake('chocholate cake',20)
let peanut = new PeanutCake('peanut cake',30)
let cheese = new CheeseCake('cheese cake' ,35)
let sony = new Oven
sony.addCake(coklat)
sony.addCake(peanut)
sony.bakingTime(40)
console.log('===================================================')
