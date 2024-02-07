'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear; // Calculate age

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
    console.log(output); // Display age and birth year

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true; // Declare 'millennial' as function-scoped

      // Shadowing 'firstName' with a new declaration
      const firstName = 'Steven';
      output = 'NEW OUTPUT'; // Reassign 'output' within function

      const str = `Oh, and you're a millennial, ${firstName}`;
      console.log(str); // Display millennial status

      function add(a, b) {
        return a + b; // Function to add two numbers
      }

      // Trying to log 'str' here would cause an error due to block scoping
      // console.log(str);

      // Trying to call 'add' function here would work, but it's commented out
      // console.log(add(2, 3));
    }

    console.log(millennial); // Accessible due to function scoping of 'var'
    console.log(output); // Display the updated 'output'
  }

  printAge(); // Execute 'printAge'
}

const firstName = 'Aldrine'; // Global variable 'firstName'
calcAge(1995); // Invoke 'calcAge' for the year 1995


hello(); // This works! Outputs: "Hello, World!"
function hello() {
  console.log('Hello, World!');
}

console.log(a); // Outputs: undefined
var a = 5;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;


// Hoisting and TDZ in Practice

//Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Aldrine';
let job = 'web developer';
const year = 1995;

//Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example

// console.log(numProducts);

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

function showAge() {
  console.log(this); // 'this' is undefined in strict mode
}
showAge();



// console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};

calcAge(1995);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};

calcAge(1980);

const aldrine = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

aldrine.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = aldrine.calcAge;
matilda.calcAge();

const f = aldrine.calcAge;
f();


//Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const aldrine = {
  firstName: 'Aldrine',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //Solution 1
    // const self = this; //self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(this);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    //Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

aldrine.greet();
aldrine.calcAge();

//arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);


let age = 28;
let oldAge = age;
age = 29;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Aldrine',
  age: 28,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
*/

//Primitive types
let lastName = 'Rodrigo';
let oldLastName = lastName;
lastName = 'Ilao';
console.log(lastName, oldLastName);

//Reference types
const mckenzie = {
  firstName: 'Mckenzie',
  lastName: 'Rodrigo',
  age: 27,
};

const marriedMckenzie = mckenzie;

marriedMckenzie.lastName = 'Ilao';
console.log('Before marriage:', mckenzie);
console.log('After marriage:', marriedMckenzie);

//copying objects

const mckenzie2 = {
  firstName: 'Mckenzie',
  lastName: 'Rodrigo',
  age: 27,
  family: ['Alice', 'Bob'],
};

const mckenzieCopy = Object.assign({}, mckenzie2);
mckenzieCopy.lastName = 'Ilao';

mckenzieCopy.family.push('Mary');
mckenzieCopy.family.push('John');

console.log('Before marriage:', mckenzie2);
console.log('After marriage:', mckenzieCopy);
