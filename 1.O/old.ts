class Aardvark {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'aardvark';
    }
    public makeSound(animal: object) : string {
        return 'I am an aardvark, oink oink!';
    }
}

class Dog {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'dog';
    }
    public makeSound(animal: object) : string {
        return 'Woef';
    }
}

class Cat {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'cat';
    }
    public makeSound(animal: object) : string {
        return 'miauw';
    }
}

class Parrot {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'parrot';
    }
    public makeSound(animal: object) : string {
        return 'I am a pirate';
    }
}

class Zoo {
    private _animals : Array<Object> = new Array<Object>();

    public addAnimal(animal: object) {
        this._animals.push(animal);
    }

    get animals(): Array<Object> {
        return this._animals;
    }

}
let date = new Date;
let now = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
let zoo = new Zoo;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Aardvark);
zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += now +": " +
        (animal.type + ": " + animal.makeSound(animal) + "<br>");
});