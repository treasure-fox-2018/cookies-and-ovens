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

class Cake {
    constructor() {
        this.bakedTimer = 30
    }

    panggang() {
        for (let i = 0; i < this.bakedTimer+5; i+= 5) {
            if(i === 5) {
                console.log(`${this.cakeName}, menit ke ${i} : mentah`)
            } else if (i === 10) {
                console.log(`${this.cakeName}, menit ke ${i} : hampir mentah`)
            } else if (i === 15) {
                console.log(`${this.cakeName}, menit ke ${i} : hampir metang`)
            } else if (i === 20) {
                console.log(`${this.cakeName}, menit ke ${i} : matang`)
            } else if (i > 25) {
                console.log(`${this.cakeName}, menit ke ${i} : hangus`)
            }
        }
    }
}

class cokelat extends Cake {
    constructor() {
        super()
        this.bakedTimer = 20
        this.cakeName = 'Kue Cokelat'
    }
}

class kacang extends Cake {
    constructor() {
        super()
        this.bakedTimer = 30
        this.cakeName = 'Kue Kacang'
    }
}

class keju extends Cake {
    constructor() {
        super()
        this.bakedTimer = 35
        this.cakeName = 'Kue Keju'
    }
}

var cookies_and_ovens = new cokelat()
var cookies_and_ovens1 = new kacang()
var cookies_and_ovens2 = new keju()

cookies_and_ovens.panggang()
cookies_and_ovens1.panggang()
cookies_and_ovens2.panggang()



