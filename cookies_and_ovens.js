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
class Cookies {
    constructor(){
        this._name = ''
        this._cookingTime = 0
        this._maxBakedOven = 18
        this._condition = 'mentah'
        this.halfBaked = 6 
    }
    get name() {
        return this.name
    }
    get cookingTime() {
        return this._cookingTime
    }
    get bakedOven() {
        return this._bakedOven
    }
    get condition() {
        return tihs._condition
    }

    oven(){
        this._cookingTime += 3

        if(this._cookingTime <= 3 ){
            this._condition = 'Mentah'
        } else if (this._cookingTime <= this.halfBaked){
            this._condition = 'Setengah Mateng'
        } else if (this._cookingTime === this._bakedOven) {
            this._condition = 'Mateng'
        } else {
            this._condition = 'gosong'
        }
    }

    
}

class Chocholate extends Cookies {
    constructor(){
        super()
        this._name = 'Chocholate Cookies'
        this._maxBakedOven = 12
    }
}
class Peanut extends Cookies {
    constructor(){
        super()
        this._name = 'Peanut Cookies'
        this._maxBakedOven = 17
    }
}
class Cheese extends Cookies {
    constructor(){
        super()
        this._name = 'Cheese Cookies'
        this._maxBakedOven = 15
    }
}

let Cookies = new Cookies()

//   do {
//     Cookies.oven();
//     console.log(`[Year ${fruitTree.age} Report] Height = ${fruitTree.height} | Fruits harvested = ${fruitTree.harvested}`)
//    } while (fruitTree.healthStatus != false)

// module.export ={ 
//   fruit : Fruit,
//   tree : FruitTree
// }



for (let i = 0; i < 10; i++) {
    
    cake.cooking()
    
    console.log(cake._name + ', menit ke ' + cake._cookingTime + ' : ' + cake._status )
}
