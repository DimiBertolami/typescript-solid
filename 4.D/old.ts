//The interface acts as a template to assure all derived objects share the same members (methods)
interface MembersTemplate{
    lightGas() : void;
    extinguishGas() : void;
    bake(item : string) : void;
}
// public Cook(item : string) {
//     this._oven.lightGas();
//     this._oven.bake(item);
//     this._oven.extinguishGas();
// }
class gasOven extends Restaurant implements MembersTemplate {
    private _isOn : boolean;
    constructor(_isOn : boolean) {
        super(_isOn = false);
    }

    lightGas() : void
    {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : THE GAS IS ON!</p>";
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
}


class Restaurant {
    private _name : string;
    private _gasoven : gasOven = new gasOven(false);

    constructor(_name : string) {
        this._name = name;
    }


}


let bakery = new Restaurant("Bakery");
bakery.Cook("cookies");

//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
/*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");
 */
