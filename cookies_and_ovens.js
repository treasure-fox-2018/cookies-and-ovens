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

class Cake{
    constructor(jenis,waktuMatang){
        this._jenis = jenis
        this._waktuMatang = waktuMatang
    }

    get jenis(){
        return this._jenis
    }

    get waktuMatang(){
        return this._waktuMatang
    }

    cook(time){
        //5,10,15,20,25 [mentah,mentah,hampir matang,matang,hangus]
        // var statusWaktu = [5,10,15,20,25]
        var statusMatang
        for (let i = 0; i <= time; i++) {
            if (i % 5 == 0) {
                this.time = i
                if (this.time <= 10) {
                    statusMatang = 'mentah'
                }else
                if (this.time < this.waktuMatang) {
                    statusMatang = 'hampir matang'
                }else
                if (this.time == this.waktuMatang) {
                    statusMatang = 'MATANG'
                }else
                if (this.time > this.waktuMatang) {
                    statusMatang = 'hangus'
                }

                console.log(`${this.jenis}, menit ke ${i} : ${statusMatang}`);
                
            }
        }
    }


}

class Coklat extends Cake{
    constructor(){
        super('coklat',20)
    }
}

class Kacang extends Cake{
    constructor(){
        super('kacang',30)
    }
}

class Keju extends Cake{
    constructor(){
        super('keju',35)
    }
}

var coklat = new Coklat()
var kacang = new Kacang()
var keju = new Keju()

coklat.cook(30)
console.log(coklat);

kacang.cook(40)
console.log(kacang);

keju.cook(50)
console.log(keju);
