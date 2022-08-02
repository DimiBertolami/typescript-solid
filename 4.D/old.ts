//The interface acts as a template to assure all derived objects share the same members (methods)
// I could easily also call this MethodsTemplate`
interface MembersTemplate{
    bake(item : string) : void;
    Cook(item : string) : void;
}
class Oven {
    protected _isOn : boolean;
    // private _oven : Oven;
    constructor() {
        // this._oven = new Oven();
        this._isOn = false;
    }
}


class electricOven extends Oven {
    private _item : string;
    constructor() {
        super();
    }

    powerOn() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : GAS PRICES SAY NO! SAY HELLO TO MY ELECTRIC FRIEND</p>";
        }, 1000);
        console.log("GAS PRICES SAY NO! SAY HELLO TO MY ELECTRIC FRIEND"); //insert fart humor here
        this._isOn = true;
    }

    powerOff() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS PREFERS TO STAY IN RUSSIA! I'M FULLY ELECTRIC!</p><hr>";
        }, 3000);
        console.log("THE GAS PREFERS TO STAY IN RUSSIA! I'M FULLY ELECTRIC");
        this._isOn = false;
    }

    bake(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no gas! j/k still electric!</p>";
            }, 2000);
            console.log("there is no gas! j/k still electric");//insert fart humor here
        }
    }
    Cook(item : string) {
        this.powerOn();
        this.bake(item);
        this.powerOff();
    }
}
class gasOven extends Oven {
    private _item : string;
    constructor() {
        super();
    }

    lightGas() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS ON! AND KYLE GAS IS ART!</p>";
        }, 1000);
        console.log("THE GAS IS ON! AND KYLE GAS IS ART!"); //insert fart humor here
        this._isOn = true;
    }

    extinguishGas() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    }

    bake(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!");//insert fart humor here
        }
    }
    Cook(item : string) {
        this.lightGas();
        this.bake(item);
        this.extinguishGas();
    }
}
class stove extends Oven {
    private _item : string;
    constructor() {
        super();
    }

    igniteWood() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE FIRE GITS CRACKIN! AND KYLE GAS IS ART!!</p>";
        }, 1000);
        console.log("THE FIRE GITS CRACKIN! AND KYLE GAS IS ART!"); //insert fart humor here
        this._isOn = true;
    }

    extinguishWood() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : STOVE IS EXTINGUISHED!</p><hr>";
        }, 3000);
        console.log("STOVE IS EXTINGUISHED!"); //insert fart humor here
        this._isOn = false;
    }

    bake(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : there is no more wood!</p>";
            }, 2000);
            console.log("there is no more wood!");//insert fart humor here
        }
    }
    Cook(item : string) {
        this.igniteWood();
        this.bake(item);
        this.extinguishWood();
    }
}

class electricRestaurant extends electricOven implements MembersTemplate{
    private _name : string;
    private _oven : electricOven;
    constructor(_name : string, _oven : electricOven) {
        super();
    }
}
class gasRestaurant extends gasOven implements MembersTemplate{
    private _name : string;
    private _oven : gasOven;
    constructor(_name : string, _oven : gasOven) {
        super();
    }
}
class Crepery extends stove implements MembersTemplate{
    private _name : string;
    private _oven : stove;
    constructor(_name : string, _oven : stove) {
        super();
    }
}

let bakery1 = new gasRestaurant("gas powered Bakery", new gasOven());
bakery1.Cook("cookies");

let bakery = new electricRestaurant("electric powered Bakery", new electricOven());
bakery.Cook("wustebroeikes");

let crepery = new Crepery("Crepery", new stove());
crepery.Cook("crepes");
