"use strict";

/*

let js = "amazing";


console.log(40 + 8 + 23 - 10);

console.log("Aldrine");
console.log(23);

let firstName = "Aldrine";
console.log(firstName);

// Variable naming conventions
let aldrine_madelene = "AM";
let $function = 27;

let person = "alds";
let PI = 3.1415;

let myFirstJob = "Content Moderator";
let mySecondJob = "Programmer";

console.log(mySecondJob);

// 

let javascriptIsFun = true;
console.log(typeof javascriptIsFun);
console.log(typeof true);
console.log(typeof 19);
console.log(typeof "Aldrine");

javascriptIsFun = "Yes";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1995;
console.log(typeof year);

console.log(typeof null);


let age = 28;
age = 29;

const birthYear = 1995;

//Math Operators
const now = 2037;
const ageAldrine = now - 1995;
const ageMads = now - 2003;
console.log(ageAldrine, ageMads);

console.log(ageAldrine * 2, ageAldrine / 2, 2 ** 3);
//2 ** 3 means to the power of 3= 2 * 2 * 2;

const firstName = "Aldrine";
const lastName = "Ilao";
console.log(firstName + " " + lastName);

//Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4
console.log(x);

x++; //x = x + 1;
x--;
x--;
console.log(x);

//Comparison Operators
console.log(ageAldrine > ageMads);
console.log(ageMads >= 35);
console.log(ageMads); //false because 34


const now = 2037;
const ageAldrine = now - 1995;
const ageMads = now - 2001;
console.log(now - 1995 > now - 2001);

const average = (ageAldrine + ageMads) / 2;
console.log(ageAldrine, ageMads, average);

//Challenge #1

let massMark = 78;
let heightMark = 1.69;

let BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);

let massJohn = 92;
let heightJohn = 1.95;

let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);


const firstName = "Aldrine";
const job = "developer";
const birthYear = 1995;
const year = 2037;

const aldrine =
  "I'm " +
  firstName +
  ", a " +
  (year - birthYear) +
  " years old" +
  " " +
  job +
  "!";
console.log(aldrine);

const aldrineNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(aldrineNew);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String with
multiple
lines`);


const age = 15;

if (age >= 18) {
  console.log("Sara can start driving");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 1999;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

//Challenge #2

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Write your code below. Good luck! 🙂 

if (BMIMark >= BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
}



//Type Conversion

const inputYear = "1995";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number("Aldrine"));
console.log(typeof NaN);

console.log(String(23), 23);

//Type Coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3, "23" + "10" + 3);

let n = "1" + 1; //11
n = n - 1; //10
console.log(n);



//Truthy and Falsy Values

//5 Falsy Values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Alds"));
console.log(Boolean({}));
console.log(Boolean(""));

//Truthy Value

const money = 100;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

//Falsy Value

const yourMoney = 0;

if (yourMoney) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height;

if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is undefined");
}



const age = "18";
if (age === 18) console.log("You just became an adult (strict)");

if (age == 18) console.log("You just became an adult (loose)");

const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite, typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("Cool! 7 is an amazing number!");
} else if (favourite === 9) {
  console.log("Cool! 9 is an amazing number!");
} else {
  console.log("Number is not 23 or 7 or 9");
}

//different operator

if (favourite !== 23) console.log("Why not 23?");


//Logical Operators

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone should drive");
// }

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone should drive");
}



There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy! 
Your tasks: 
1. Calculate the average score for each team, using the test data below 
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score) 
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks 
😉 
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy 
Test data: 
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 




//Challenge # 3
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphines < scoreKoalas) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}



// BONUS 1

const scoreDolphins = (97 + 108 + 89) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}



//Bonus 2
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both teams win the trophy");
} else {
  console.log("No teams win the trophy");
}



//Switch Case Statement

const day = "monday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course ");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day!");
}


//Ternary Operator

const age = 23;
age >= 18;
// ? console.log("I like to drink wine")
// : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;

if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}

console.log(drink2);
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

*/

const bill = 430;

/* Write your code below. Good luck! 🙂 */

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`
);
