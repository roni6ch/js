# JS Prototype (Inheritance)
`* Prototypes are the mechanism by which JavaScript objects inherit properties and features from one another`
`* The chain ends when we reach a prototype that has null for its own prototype.`

function Person(age) {
    this.age = age;
}

Person.prototype.sayHello = function() {
    return 'Hello';
}

Person.prototype // {sayHello: ƒ, constructor: ƒ}
Person.age // undefined
Person.prototype.age // undefined
Person.prototype.sayHello() // Hello
Person.prototype.__proto__ // Object prototype {constructor: ƒ, ...}
Person.prototype.__proto__.__proto__ // null (top level hierarchy, thats the prototype chain)

let p1 = new Person(22);
p1.__proto__ === Person.prototype // true
p1.age // 22
p1.sayHello() // Hello

let p2 = new Person(30);
p2.sayHi() // Hi

p1.sayHi() // undefined