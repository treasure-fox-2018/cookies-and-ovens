// Answer These Questions:
//
// - What are essential classes? class Cookie
// - What attributes will each class have? name, timeCooked
// - What interface will each class provide? 
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any? ChocolateCookie, PeanutCookie, CheeseCookie are inherit to Cookie
//
//
// Your code here

class Cookie{
    constructor(name, timeCooked){
        this.name = name
        this.timeCooked = timeCooked
        this.status = "mentah"
    }
}

class ChocolateCookie extends Cookie{
    constructor(name, timeCooked){
        super(name, timeCooked)
    }
}

class PeanutCookie extends Cookie{
    constructor(name, timeCooked){
        super(name, timeCooked)
    }
}

class CheeseCookie extends Cookie{
    constructor(name, timeCooked){
        super(name, timeCooked)
    }
}

class Oven{
    constructor(name, time){
        this.cookie = []
    }

    insertCookies(objCookie){
        this.cookie.push(objCookie)
    }

    bake(time){
        for(let i=5; i<=time; i+=5){
            console.log(`============ Time ${i} ============`)
            for(let j=0; j<this.cookie.length; j++){
                if(i < (this.cookie[j].timeCooked / 3 * 2)){
                    this.cookie[j].status = "mentah"
                } else if(i === (this.cookie[j].timeCooked - 5)){
                    this.cookie[j].status = "hampir matang"
                } else if(i === this.cookie[j].timeCooked ){
                    this.cookie[j].status = "matang"
                } else {
                    this.cookie[j].status = "hangus"
                } 
                console.log(`${this.cookie[j].name}, menit ke ${i} : ${this.cookie[j].status}`)
                if(this.cookie[j].status === "matang"){
                    console.log(`-----------------------------------------> Hurry up! ${this.cookie[j].name} is done`)
                    
                    // kalau mau hilangin yg sudah matang biar gak hangus, klu matang diangkat, go un-comment code berikut
                    // if(j !== this.cookie.length-1){
                    //     console.log(`${this.cookie[j+1].name}, menit ke ${i} : ${this.cookie[j+1].status}`)
                    // }
                    // this.cookie = this.cookie.splice(j+1,this.cookie.length)
                } 
                
            }
            if(i === time){
                console.log(`We are done! yeaayy!`);
                
            }
        }
    }
}

let cookies = new Cookie()
let chocolate = new ChocolateCookie("Chocolate Cookie", 20)
let peanut = new PeanutCookie("Peanut Cookie", 30)
let cheese = new CheeseCookie("Cheese Cookie", 40)

let oven = new Oven()
oven.insertCookies(chocolate)
oven.insertCookies(peanut)
oven.insertCookies(cheese)

oven.bake(40)