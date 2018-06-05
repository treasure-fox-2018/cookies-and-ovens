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
    constructor(namakue, waktuMasak){
        this.namaKue = namakue;
        this.waktuMasak = waktuMasak
    }
}

class Oven {
    constructor(panggang){
        this.panggang = panggang
    }

    proses(waktu){
        for(let i = 5; i < waktu; i+=5){
            if(i < this.panggang.waktuMasak-5){
                console.log(`${this.panggang.namaKue}, menit ke ${i} : mentah`);
            }else if(i === this.panggang.waktuMasak-5){
                console.log(`${this.panggang.namaKue}, menit ke ${i} : hampir matang`);   
            }else if(i === this.panggang.waktuMasak){
                console.log(`${this.panggang.namaKue}, menit ke ${i} : matang`);
            }else {
                console.log(`${this.panggang.namaKue}, menit ke ${i} : hangus`);
            }
        }

    }
}

var coklat = new Kue('Kue Coklat',20)
var masak = new Oven(coklat)
masak.proses(30)





