"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = 534;



function logger() {
  console.log("My name is Aldrine");
}

//calling, running, invoking
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//Funtion Declarations vs Expressions

//Function Declarations
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1995);
console.log(age1);

//Function Expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1995);
console.log(age1, age2);


//Function Expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

//Arrow Functions

//One parameter with one line of code
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1995);
console.log(age3);

//One parameter with more than one line of code
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1995, "Aldrine"));
console.log(yearsUntilRetirement(2002, "Alds"));




function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1995, "Aldrine"));
console.log(yearsUntilRetirement(1950, "Alds"));


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



CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.







//Test Data 1
const calcAverage = (score1, score2, score3) => {
  const averageScore = (score1 + score2 + score3) / 3;

  return averageScore;
};

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas * 2) {
    console.log(`Dolphins  win (${avgDolphins}) vs. (${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas}) vs. (${avgDolphins})`);
  } else {
    console.log("No team wins");
  }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

//Test Data 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


//Arrays

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log("friends");

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length); //to know how many elements in an array
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
//friends = ["Bob", "Alice"];

const firstName = "Aldrine";
const aldrine = [firstName, "Ilao", 2023 - 1995, "web developer", friends];
console.log(aldrine);
console.log(aldrine.length);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);


//Array Methods

//Add Elements
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove elements
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Bob")) {
  console.log("You have a friend called Steven");
}




const bill = 430;

// Write your code below. Good luck! 🙂 

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`
);


//Coding Challenge 2

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(totals);


const jonasArray = [
  "Aldrine",
  "Ilao",
  2023 - 1995,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const aldrine = {
  firstName: "Aldrine",
  lastName: "Ilao",
  age: 2023 - 1995,
  job: "web developer",
  friends: ["Michael", "Peter", "Steven"],
};



//Dot vs. Bracket Notation

const aldrine = {
  firstName: "Aldrine",
  lastName: "Ilao",
  age: 2023 - 1995,
  job: "web developer",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(aldrine);

console.log(aldrine.lastName);
console.log(aldrine["lastName"]);

const nameKey = "Name";

console.log(aldrine["first" + nameKey]);
console.log(aldrine["last" + nameKey]);

//console.log(jonas."last" + nameKey)

const interestedIn = prompt(
  "What do you want to know about Aldrine? Choose between firstName, lastName, age, job, and friends"
);

if (aldrine[interestedIn]) {
  console.log(aldrine[interestedIn]);
} else {
  console.log(
    "Wrong request! What do you want to know about Aldrine? Choose between firstName, lastName, age, job, and friends"
  );
}

aldrine.location = "Philippines";
aldrine["tiktok"] = "@j0hnnydev";
console.log(aldrine);

//Challenge
//Aldrine has 3 friends, and his best friend is called Michael

console.log(
  `${aldrine.firstName} has ${aldrine.friends.length} friends, and his best friend is called ${aldrine.friends[0]}`
);



const aldrine = {
  firstName: "Aldrine",
  lastName: "Ilao",
  birthYear: 1995,
  job: "web developer",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    // console.log(this);
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};
aldrine.calcAge();

console.log(aldrine.age);
console.log(aldrine.age);
console.log(aldrine.age);

console.log(aldrine.getSummary());

// console.log(aldrine["calcAge"](1995));

//Challenge

//"Aldrine is a 42-year old web developer, and he has a driver's license"





//Coding Challenge 3




const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than John Smith's (${john.bmi})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john}) is higher than Mark Smith's (${mark.bmi})`
  );
}


//Iteration: The For Loop

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}


//Looping Arrays, Breaking and Continue
const aldrine = [
  "Aldrine",
  "Ilao",
  2023 - 1995,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

//console.log(aldrine[0]);
//console.log(aldrine[1]);
//console.log(aldrine[2]);
//console.log(aldrine[3]);
//console.log(aldrine[4]);
//aldrine[5] does not exist

for (let i = 0; i < aldrine.length; i++) {
  //reading from aldrine array
  console.log(aldrine[i], typeof aldrine[i]);

  //filling types array
  //types[i] = typeof aldrine[i];
  types.push(typeof aldrine[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

//continue and break
console.log("ONLY STRINGS");
for (let i = 0; i < aldrine.length; i++) {
  if (typeof aldrine[i] !== "string") continue;
  console.log(aldrine[i], typeof aldrine[i]);
}

console.log("BREAK WITH NUMBER");
for (let i = 0; i < aldrine.length; i++) {
  if (typeof aldrine[i] === "number") break;
  console.log(aldrine[i], typeof aldrine[i]);
}



//Looping Backwards and loops in Loops
const aldrine = [
  "Aldrine",
  "Ilao",
  2023 - 1995,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = aldrine.length - 1; i >= 0; i--) {
  console.log(i, aldrine[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}

//The while loop

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;

while (rep <= 10) {
  console.log(`While: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end");
}
*/

//Coding Challenge 4

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills);
console.log(`tips: ${tips}`);
console.log(`totals: ${totals}`);

//Bonus

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7, 20, 3]));
console.log(calcAverage(totals));
