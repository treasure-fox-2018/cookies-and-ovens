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


class Cookie{
    constructor(name,time){
        this.name = name
        this.timetoCook = time
        this.status = 'mentah'
        // this.timeStartCook = 0
    }
} 


class KueCoklat extends Cookie{
    constructor(){
        super('Kue Coklat',20)
        // this.timetoCook = 20
    }
}
class KueKacang extends Cookie{
    constructor(){
        super('Kue Kacang',30)
        // this.timetoCook = 30
    }
}
class KueKeju extends Cookie{
    constructor(){
        super('Kue Keju',35)
        // this.timetoCook = 35
    }
}

class Oven{
    constructor(){
        // this.timeCook = timeCook
        this.cakes = []
    }
    addCookies(objCakes){
        this.cakes.push(objCakes)
    }
    cooking(timeCook){
        var cakes = this.cakes
        for(var i = 0; i <= timeCook; i=i+5){
            var cakesStatus = []
            var status = []
            for(var j = 0; j < cakes.length; j++){
                if(i <= 5 || i <= 10){
                    cakes[j].status = "mentah"
                    status.push("mentah")
                    cakesStatus.push(cakes[j].name)
                }
                else if(i==cakes[j].timetoCook){
                    cakes[j].status = "matang"
                    status.push("matang")
                    cakesStatus.push(cakes[j].name)
                }
                else if(i>cakes[j].timetoCook){
                    cakes[j].status = "hangus"
                    status.push("hangus")
                    cakesStatus.push(cakes[j].name)
                }
                else{
                    cakes[j].status = "hampir matang"
                    status.push("hampir matang")
                    cakesStatus.push(cakes[j].name)
                }
            }
            console.log(`
            menit ke ${i}
            `);
            for(var a = 0; a < cakesStatus.length; a++){
                console.log(`${cakesStatus[a]} status kematangan ${status[a]}`);
            }
        }
    }
}

var cookies = new Cookie()

var kueCoklat = new KueCoklat()
var kueKacang = new KueKacang()
var kueKeju = new KueKeju()


var cook = new Oven()
cook.addCookies(kueCoklat)
cook.addCookies(kueKacang)
cook.addCookies(kueKeju)
cook.cooking(50)

// console.log(kue);
