var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Oven = /** @class */ (function () {
    // private _oven : Oven;
    function Oven() {
        // this._oven = new Oven();
        this._isOn = false;
    }
    return Oven;
}());
var electricOven = /** @class */ (function (_super) {
    __extends(electricOven, _super);
    function electricOven() {
        return _super.call(this) || this;
    }
    electricOven.prototype.powerOn = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : GAS PRICES SAY NO! SAY HELLO TO MY ELECTRIC FRIEND</p>";
        }, 1000);
        console.log("GAS PRICES SAY NO! SAY HELLO TO MY ELECTRIC FRIEND"); //insert fart humor here
        this._isOn = true;
    };
    electricOven.prototype.powerOff = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS PREFERS TO STAY IN RUSSIA! I'M FULLY ELECTRIC!</p><hr>";
        }, 3000);
        console.log("THE GAS PREFERS TO STAY IN RUSSIA! I'M FULLY ELECTRIC");
        this._isOn = false;
    };
    electricOven.prototype.bake = function (item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas! j/k still electric!</p>";
            }, 2000);
            console.log("there is no gas! j/k still electric"); //insert fart humor here
        }
    };
    electricOven.prototype.Cook = function (item) {
        this.powerOn();
        this.bake(item);
        this.powerOff();
    };
    return electricOven;
}(Oven));
var gasOven = /** @class */ (function (_super) {
    __extends(gasOven, _super);
    function gasOven() {
        return _super.call(this) || this;
    }
    gasOven.prototype.lightGas = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS ON! AND KYLE GAS IS ART!</p>";
        }, 1000);
        console.log("THE GAS IS ON! AND KYLE GAS IS ART!"); //insert fart humor here
        this._isOn = true;
    };
    gasOven.prototype.extinguishGas = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!"); //insert fart humor here
        this._isOn = false;
    };
    gasOven.prototype.bake = function (item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!"); //insert fart humor here
        }
    };
    gasOven.prototype.Cook = function (item) {
        this.lightGas();
        this.bake(item);
        this.extinguishGas();
    };
    return gasOven;
}(Oven));
var stove = /** @class */ (function (_super) {
    __extends(stove, _super);
    function stove() {
        return _super.call(this) || this;
    }
    stove.prototype.igniteWood = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE FIRE GITS CRACKIN! AND KYLE GAS IS ART!!</p>";
        }, 1000);
        console.log("THE FIRE GITS CRACKIN! AND KYLE GAS IS ART!"); //insert fart humor here
        this._isOn = true;
    };
    stove.prototype.extinguishWood = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : STOVE IS EXTINGUISHED!</p><hr>";
        }, 3000);
        console.log("STOVE IS EXTINGUISHED!"); //insert fart humor here
        this._isOn = false;
    };
    stove.prototype.bake = function (item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no more wood!</p>";
            }, 2000);
            console.log("there is no more wood!"); //insert fart humor here
        }
    };
    stove.prototype.Cook = function (item) {
        this.igniteWood();
        this.bake(item);
        this.extinguishWood();
    };
    return stove;
}(Oven));
var electricRestaurant = /** @class */ (function (_super) {
    __extends(electricRestaurant, _super);
    function electricRestaurant(_name, _oven) {
        return _super.call(this) || this;
    }
    return electricRestaurant;
}(electricOven));
var gasRestaurant = /** @class */ (function (_super) {
    __extends(gasRestaurant, _super);
    function gasRestaurant(_name, _oven) {
        return _super.call(this) || this;
    }
    return gasRestaurant;
}(gasOven));
var Crepery = /** @class */ (function (_super) {
    __extends(Crepery, _super);
    function Crepery(_name, _oven) {
        return _super.call(this) || this;
    }
    return Crepery;
}(stove));
var bakery1 = new gasRestaurant("gas powered Bakery", new gasOven());
bakery1.Cook("cookies");
var bakery = new electricRestaurant("electric powered Bakery", new electricOven());
bakery.Cook("wustebroeikes");
var crepery = new Crepery("Crepery", new stove());
crepery.Cook("crepes");
