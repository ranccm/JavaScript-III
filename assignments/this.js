/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. implicit binding - when an object is to the left of the dot in a function invocation, 'this'
     to that object. 
     
            ex: anything.something();
            the 'this' keyword is whatever is to the left of the dot. anything=this

* 2. global/window object binding- when in the global scope, the value of "this" will
     be the window/console Object;

* 3. new binding- invoking a function with the 'new' keyword, a new object is created and 
     returned by the constructor function and the 'this' keyword inside that function gets 
     bound to the new object. 

* 4. explicit binding- whenenver javascript's call or apply method is used, 'this' is explicitly
     defined. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function saySomething(anything) {
  console.log(this);
  return anything;
}

saySomething("Whaaaat");

// Principle 2
// code example for Implicit Binding

let me = {
    name: 'Ranim',
    age: 23,
    speak: function() {
        console.log(`Hiya, my name is ${this.name}`);
    }
}
me.speak()

// Principle 3
// code example for New Binding

function Movie(name, genre) {
    this.name = name;
    this.genre = genre;
    this.opinion = function() {
        console.log(`${this.name} is my favorite ${this.genre} movie.`);
    };
}

const favorite = new Movie("The Lion King", "Children's");
favorite.opinion();

// Principle 4
// code example for Explicit Binding

const human1 = {
    name: "Queen Helene",
    likes: "taking over weaker countries"
}

const human2 = {
    name: "King Drago",
    likes: "playing poker"
}

const tasks = ["ruling", "meetings", "eating"];

function intro(params) {
    return `hello people, my name is ${this.name}, i enjoy ${this.likes}. my day includes ${params}.`;
}

console.log(intro.call(human1, tasks));