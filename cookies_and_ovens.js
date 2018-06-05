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

class Cookie {
    constructor(name, bakeTime) {
        this._name = name;
        this._wellBakedTime = 5;
        this._inputBakeTime = bakeTime;
        this._cookieStatus = '';
    }

    get name() {
        return this._name;
    }

    get wellBakedTime() {
        return this._wellBakedTime;
    }

    get inputBakeTime() {
        return this._inputBakeTime;
    }

    get cookieStatus() {
        return this._cookieStatus;
    }

    set cookieStatus(status) {
        this._cookieStatus = status;
    }

    cook() {
        let time = 0;
        let cookieStatus = 'mentah';
        let inputTime = this.inputBakeTime;
        let wellBakedTime = this._wellBakedTime;
        console.log(`\nSedang memasak ${this.name}`);
        while (time < inputTime) {
            time += 5;
            if (time < (inputTime*0.8)) {
                cookieStatus = 'mentah';
            } else if (time >= (inputTime*0.8) && time < this.wellBakedTime) {
                cookieStatus = 'hampir matang';
            } else if (time === this.wellBakedTime) {
                cookieStatus = 'matang';
            } else if (time > this.wellBakedTime){
                cookieStatus = 'hangus';
            }
            console.log(`${this.name}, menit ke ${time} : ${cookieStatus}`);
        }

        if (cookieStatus === 'hampir matang') {
            this.cookieStatus = 'tidak matang';
        } else {
            this.cookieStatus = cookieStatus;
        }

        console.log(`${this.name} anda ${this.cookieStatus}`);
    }
}

class KueCokelat extends Cookie {
    constructor(name, bakeTime) {
        super(name, bakeTime);
        this._name = 'Kue Cokelat';
        this._wellBakedTime = 20;
    }
}

class KueKacang extends Cookie {
    constructor(name, bakeTime) {
        super(name, bakeTime);
        this._name = 'Kue Kacang';
        this._wellBakedTime = 30;
    }
}

class KueKeju extends Cookie {
    constructor(name, bakeTime) {
        super(name, bakeTime);
        this._name = 'Kue Keju';
        this._wellBakedTime = 35;
    }
}

let chocolateCookie = new KueCokelat('Kue Cokelat', 25);
let nutCookie = new KueKacang('Kue Kacang', 15);
let cheeseCookie = new KueKeju('Kue Keju', 35);

chocolateCookie.cook();
nutCookie.cook();
cheeseCookie.cook();

//
