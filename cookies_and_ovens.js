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


class Kue{
    constructor(name, time){
        this._name = name;
        this._time = time;
    }
    
}

class KueCoklat extends Kue{
    constructor(){
        super('Kue Coklat', 20)
    }
}


class KueKacang extends Kue{
    constructor(){
        super('Kue Kacang', 30)
    }
}

class KueKeju extends Kue{
    constructor(){
        super('Kue Keju', 35)
    }
}

class Oven{
    constructor(){
        this.kue = [];
    }
    
    insert(kue){
        this.kue.push(kue)
        return this.kue;
    }
    
    bake(time){
        var status = ['mentah', 'mentah', 'mentah', 'hampir matang', 'matang', 'hangus']
        var countStatus = 0
        var arrKue = this.kue;
        for(let a = 0; a < time; a++ ){
            if(a%5===0){
                countStatus +=1;
                var statusKue = status[countStatus];
                
                for(let b = 0; b < arrKue.length; b++){
                    let namaKue = arrKue[b]._name;
                    let cookingTime = arrKue[b]._time;
                    if(a > 0 && a < cookingTime){
                        if( a >= cookingTime){
                            statusKue = 'hangus';
                        }
                        console.log(a, namaKue, statusKue);
                    }
                }
            }
        } 
        
    }
}


let kueCoklat = new KueCoklat;
let kueKacang = new KueKacang;
let kueKeju   = new KueKeju;
let oven = new Oven;

console.log(kueCoklat);
console.log(kueKacang);
console.log(kueKeju);

//oven.insert(kueCoklat)
oven.insert(kueKacang)
oven.insert(kueKeju)
console.log(oven);
oven.bake(35);


