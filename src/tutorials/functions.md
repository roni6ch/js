# Regular Functions

1. Anonymous functions
    * function() { return 'hello' }
    * const sayHello = function() { return 'hello' } // - not hoisted | + pass as param to other function + stack traced
    * (function() { // leaves at his own scope (no conflicts / safer for closures)
        console.log('IIFE');
      })();
    
2. Callback functions
    * setTimeout( function() { return 'hello' } );
    
3. Named functions (factory functions / regular functions / clousers)
    * function sayHello() { return 'hello' }
    * function sayHello(name) {
        return {
            talk() { return 'hello' + name}
        }
    }

4. Constructor functions
    * function sayHello(name) { this.name = name; }

5. Object methods
    * const me = { 
        sayHello: function() { 
            console.log('hello');
        } 
    } 

# Arrow Functions

1. cant use “arguments”
2. cant act as constructors functions
3. cant bind this to objects
4. cant be hoisted.
5. can return without {}, and without (), example: function a = name => console.log(‘hello’, name);

**Example**
===========
function func() {
    return this; //window
};
const arrowFunc = () => {
    return this; //window
}
func();
arrowFunc();


const me = {
    name: 'Roni',
    talk: function(){
        return this; //me
    },
    arrowTalk: () => {
        return this; //window
    },
    nestedArrowTalk: function() {
        return () => {
            return this; //me
        };
    }
}
me.talk()
me.arrowTalk()
me.nestedArrowTalk()()

===========
### me.talk() 
return the object (left side object that invoke the function)

### me.arrowTalk() 
return the window (because arrow dosnt binded to objects)
(think of this, like writing it outside the arrow, and that will be the result of this.)
    like writting, arrowTalk: this (and ‘this’ inside the “me” object, return window like regular function)

### me.nestedArrowTalk()() 
if we put the this outside the arrow function, it will be inside the regular function. 
    and over there, the object called the function (left side) will return “me”
