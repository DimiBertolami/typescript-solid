# typescript-solid

### SOLID Principles!

# S: Single responsibility principle 

#### Single responsibility principle states that a class should only have one reason to change

> No god objects that control everything, separate them in logical classes.

> as in every class should do only one thing.

> refactor large classes so that every class is owned exactly by one entity

> Business requirements change all the time, if your class has too many responsibilities, then these responsibilities become co-dependent of each other.

> Once classes have a single responsibility they simply become much easier to work with, you can easily explain to your colleagues what the class does, and bug fixing becomes a lot easier.

<hr>

# O: ***Open–closed principle***. 

> Classes should be open for extension, but closed for modification

## The main goal of this principle is to keep the existing code from breaking when you implement new features.

### A class is:

1. ***Open*** if you can extend it, and produce a subclass and do whatever you want with it—add new methods or fields, override certain behavior etc.

1. ***Closed*** if it's interface is clearly defined and won’t change in the future

> If a class is already developed, tested, reviewed, and used in an app, trying to mess with the code is very risky. Instead of changing the code of the class directly, you can simply create a subclass and override parts of the original class that you want to behave differently or you can extend the functionality and add your own methods or even implement interfaces!

## Program by Interface, not by Implementation

### Bad structure
![image](https://user-images.githubusercontent.com/77209365/182554715-44f77366-d1d3-4dc9-baa6-3dc687983fc2.png)

### Turns into
![image](https://user-images.githubusercontent.com/77209365/182554872-289ab0d9-98ff-40d6-ae37-323dba2f7af4.png)


> ***THIS MEANS*** write your code so it uses an abstraction (abstract class or interface) instead of the implementation directly. 

# L: Liskov substitution principle

### the Liskov Substitution Principle (LSP) states that objects of a superclass should be replaceable with objects of its subclasses without breaking the application. In other words, what we want is to have the objects of our subclasses behaving the same way as the objects of our superclass.

> Objects in a program should be replaceable with instances of their subtypes without altering the correctness of the program

> If 2 different classes use the same interface, they are functionally interchangeable = polymorphism.

![image](https://user-images.githubusercontent.com/77209365/182551131-372f648d-f6ef-4516-be06-d7f903a2cb3b.png)
![image](https://user-images.githubusercontent.com/77209365/182551406-5b521487-a466-4891-80bf-816c163f2972.png)

> The Liskov Substitution principle extends the Open/Closed principle and enables you to replace objects of a parent class with objects of a subclass without breaking the application. This requires all subclasses to behave in the same way as the parent class. To achieve that, your subclasses need to follow these rules:

1. Don’t implement any stricter validation rules on input parameters than implemented by the parent class.
1. Apply at the least the same rules to all output parameters as applied by the parent class.

<hr>
  
# I: Interface segregation principle 

> In the field of software engineering, the interface-separation principle (ISP) states that no client should be forced to depend on methods it does not use.

>> an interface shouldn't force a class to implement methods that it won't be using.

## Let's look at an example where this principle is violated.

> Imagine an interface for a fictional pizza place, where a customer can order a pizza, soda, or a combo

```typescript
interface OrderService{
	orderPizza(pizza : string, amount : number);
	orderDrink(drink : string, amount : number);
	orderCombo(pizza : string, drink : string, , amount : number);
}
```

> Since a customer can order pizza, or a drink, or both, we decided to put all order methods in a single interface.

### Now, to implement a pizza-only order, we are forced to throw an exception in the orderDrink() method:

```typescript
class PizzaOrderService implements OrderService{
	orderPizza(pizza : string, amount : number){
		console.log(`Received order for ${pizza}. AMOUNT (${amount})`);
	}
	orderDrink(drink : string, amount : number){
		throw new Exception('computer says no! #CoughsInYourFaceAlso ');
	}
}
```
> Same thing for drink-only orders

## This design introduces many downsides

> If we make a change to the orderDrink() in the interface, we're also going to have to implement the revised function in the pizza-order class where it isn't being used

## By violating the interface separation principle, we face the following problems in our code:


1. Client developers are confused by the methods they don’t need.

1. Maintenance becomes harder because of side effects: a change in an interface forces us to change classes that don’t implement the interface.

## This also forces us to violate other SOLID principles such as SRP (Single Responsibility Principle)

> some code examples that could indicate a violation of the interface separation principle.

## Bulky Interfaces 

> When your interfaces are too bulky, it's unlikely that all your clients will use all the methods that the interface provides. The interface separation principle tells us that we need most, if not all of the methods in our interfaces, but in a bulky interface, we only need a few of them.

## Unused Dependencies

> In the example, we can use orderCombo() to place a pizza-only order by passing zero as the drink parameter. This client does not require the drink dependency, so we should have a separate method in a different interface to order drinks.

## Methods Throwing Exceptions 

> if your methods throw unexpected exceptions, this could indicate a violation of the interface separation principle. It might be wise to refactor these classes!

## back to the example

```typescript
interface PizzaOrderService{
	orderPizza(pizza : string, amount : number);
}
interface DrinkOrderService{
	orderDrink(drink : string, amount : number);
}
```
> two separate classes that handle their specific orders. You may say that this is redundant and you may be true, there are a million better ways to implement an ordering system. What this design did do for us was it separated the concerns and made it a more flexible. Now PizzaOrder is not coupled with DrinkOrder and their changes don't affect each other. I will not bore you with the completion of this ordering system, because to say it in the words of wise Yoda ***Bla Bla too much, one must not!***

<hr>

# D: Dependency inversion principle
> The Dependency Inversion Principle (DIP) states that high-level modules should not depend on low-level modules; both should depend on abstractions. Abstractions should not depend on details. Details should depend upon abstractions.


### let's break this down:

1. Client: Your main class/code that runs the high-level module.
1. High-Level Modules: Interface/Abstraction that your client uses.
1. Low-Level Modules: Details of your interfaces/abstraction.

#### What it basically says that imagine you have a car and your different components are:

1. Client: You as the person driving the car.
1. High-Level Modules: The steering wheel and the gas/brake peddles.
1. Low-Level Modules: Engine

#### Abstractions don't depend on details.

> For me, it doesn't matter whether my engine has changed or not, I still should be able to drive my car the same way.

#### Details should depend upon abstractions.

> I would not want an engine that causes the brake to double the speed.
<hr>
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
