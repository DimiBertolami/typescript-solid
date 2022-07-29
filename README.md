# typescript-solid
## SOLID Principles!

1. S: ***Single responsibility principle***. 
> No god objects that control everything, separate them in logical classes.

1. O: ***Open–closed principle***. 
> Classes should be open for extension, but closed for modification

1. L: ***Liskov substitution principle***. 
> Objects in a program should be replaceable with instances of their subtypes without altering the correctness of the program
  ```
	If 2 different classes use the same interface, 
	  so they have the same function names: the code that uses this class does not care about which one class it receives. 
	In short: When two objects have the same interface, they are functionally interchangeable = polymorphism.
  ```
1. I: ***Interface segregation principle***. 
1. D: ***Dependency inversion principle***

> First the things I needed to look up:

## Associative array: key value pairs
```Javascript	
	- let user = 	{
			  "id": 1,
			  "name": "Dimi",
			  "Age":  43,
			  "sex": UNDEFINED
	};
```
> declaring associative array by using the map object:
```Javascript
	const userMap = new Map();
	userMap.set("id", 1);
	userMap.set("name", "Dimi");
	userMap.set("Age", 43);
	console.log([...userMap]);	// notice the useage of the spread operator...
	// outputs: [["id", 1], ["name", "Dimi"], ["Age", 43]]

	// getting specific values 
	console.log(userMap.get("name"), userMap.get("Age"));
	// outputs: Dimi 43
```

## Object Literal: 
> comma separated list of name,value pairs wrapped in {curly braces} Think of Tim's "magical" mouse object in the red dot chasing the mouse exercise. This was an ***object Literal***

```quote
You can use it to fit your needs. Put in there what you want or need, but it's better to create a class that way you know what is
expected to be in the objects that are created from such classes! Wow! I get this now! a Little sad to see the magic part fading, but
i'm gaining the awesome superpowers to unlock the mysteries of the universe by knowing this and being able to apply this to my own 
code problems! 
```
    
```Javascript
	- let user = {
			id: 1,
    			name: "Dimi",
			Age: 43,
			sex: false
	};

	console.log(user.name, user.Age, user.haircolor)
		// outputs error property haircolor doesn't exist {id,name,Age,sex...}
```
> previous example declares a Literal with ***No Type***!
> The next example declares an Object Literal with type ***ANY***

```Typescript
let user:any =   {
			id: 1,
    			name: "Dimi",
			Age: 43,
			sex: Null
	};
	console.log(user.name, user.Age, user.haircolor)
		// outputs Dimi 43 << undefined >>
```
## Interfaces!
```javascript
interface userType{
	id: number,
	name: string,
	Age: number
}
let user: userType = {
	id: 10,
	name: "Dimi",
	Age: 43
}
console.log(user.id);
// 10

let user1: userType = {
	id: 11,
	name: "Dimi",
	Age: 43
}
console.log(user.id);
// 11
```



## Class: 	- A JavaScript class is not an object.
	- It is a template for JavaScript objects.
	- below example Passes a parameter into the "age()" method
> CLASSES
Classes should be open for extension, but closed for modification
```Javascript
  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  age(x) {
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);

alert("My car is " + myCar.age(year) + " years old.");
```
