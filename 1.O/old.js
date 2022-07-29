var Aardvark = /** @class */ (function () {
    function Aardvark() {
    }
    Object.defineProperty(Aardvark.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aardvark.prototype, "type", {
        get: function () {
            return 'aardvark';
        },
        enumerable: false,
        configurable: true
    });
    Aardvark.prototype.makeSound = function (animal) {
        return 'I am an aardvark, oink oink!';
    };
    return Aardvark;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dog.prototype, "type", {
        get: function () {
            return 'dog';
        },
        enumerable: false,
        configurable: true
    });
    Dog.prototype.makeSound = function (animal) {
        return 'Woef';
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Object.defineProperty(Cat.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "type", {
        get: function () {
            return 'cat';
        },
        enumerable: false,
        configurable: true
    });
    Cat.prototype.makeSound = function (animal) {
        return 'miauw';
    };
    return Cat;
}());
var Parrot = /** @class */ (function () {
    function Parrot() {
    }
    Object.defineProperty(Parrot.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Parrot.prototype, "type", {
        get: function () {
            return 'parrot';
        },
        enumerable: false,
        configurable: true
    });
    Parrot.prototype.makeSound = function (animal) {
        return 'I am a pirate';
    };
    return Parrot;
}());
var Zoo = /** @class */ (function () {
    function Zoo() {
        this._animals = new Array();
    }
    Zoo.prototype.addAnimal = function (animal) {
        this._animals.push(animal);
    };
    Object.defineProperty(Zoo.prototype, "animals", {
        get: function () {
            return this._animals;
        },
        enumerable: false,
        configurable: true
    });
    return Zoo;
}());
var date = new Date;
var now = "".concat(date.getHours(), ":").concat(date.getMinutes(), ":").concat(date.getSeconds());
var zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Aardvark);
zoo.animals.forEach(function (animal) {
    document.querySelector('#target').innerHTML += now + ": " +
        (animal.type + ": " + animal.makeSound(animal) + "<br>");
});
