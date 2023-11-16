/*
//Basics

40 + 8 + 2 - 10;
console.log(40 + 8 + 2 - 10);

let firstName = "Brando";
let number = 23;

console.log(firstName);
console.log(number);

//Lecture 1

let country = "United States";
let continent = "North America";
let population = 326000000;

console.log(country);
console.log(continent);
console.log(population);

//Lecture 2
let isIsland = "United States";
let language = "English";

console.log(isIsland);
console.log(language);
*/

//Data Types
/*
let javaScriptIsFun = false;
console.log(javaScriptIsFun);


console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'Brando');
console.log(typeof javaScriptIsFun);

javaScriptIsFun = 'YES';

console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2002;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

//Mutate a Variable or declare an empty variable
//let age = 30;
//age can later than be changed or mutate
//age = 31;

//const birthYear = 2002;
// birthYear = 2001;

// const job;
//var job = 'programmer';
//job = 'proffesor';
/*
lastName = 'Texas';
console.log(lastName);
*/
//Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2** 3 means 2 to the power of 3 = 2*2*2

// const firstName = 'Jonas';
// const lastName = 'Texas';
// console.log(firstName + ' ' + lastName);

// //Asignment operators
// let x = 10 + 5; //15
// console.log(x);
// // after ^ is executed the stored value of x is now 15
// x += 10; // x = x + 10 = 25
// console.log(x);
// x *= 4; // x = x * 4 =100
// console.log(x);

// x++; //x = x + 1
// console.log(x);

// x--; //x = x -1 
// console.log(x);

// //Comperason Operators - booleans values
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas, ageSarah, averageAge);
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
//old way
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!'
console.log(jonas);
//new way
const jonasNew = `I'm ${firstName} a ${year - birthYear} year old ${job}! `;
console.log(jonasNew);

//old way 
console.log(`Just a Stirng \n\
mulitple \n\
lines`);
//new way
console.log(`string
multiple
lines`);
*/
/*
const age = 17;
const isOldEnough = age >= 18;

if (age >= 18) {
    console.log(`Sarah can start driving lessons`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sara is too young wait ${yearsLeft} years`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/
/*
// type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' Years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; //will not be 2 will be 11 
n = n - 1;
console.log(n);
*/
/*
// 5 falsy values 0, " ", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
    console.log("Don't Spend it all");
} else {
    console.log(`You shoould get a job`)
}

let height = 0;
if (height) {
    console.log(`Hight is defined`)
} else {
    console.log(`Height is Undefined`)
}
*/
/*
const age = 18;
if (age === 18) console.log(`you are an adult (strict)`);

if (age == 18) console.log(`you are an adult (loose)`);


const favoriteNumber = Number(prompt("What is your Favorite Number"))
console.log(favoriteNumber);
console.log(typeof favoriteNumber);

if (favoriteNumber === 23) {
    console.log(`what an amazing number`);
} else if (favoriteNumber === 7) {
    console.log(`7 is a cool number`);
} else if (favoriteNumber === 9) {
    console.log(`number is 9`);
}
else {
    console.log(`Number is not 23 or 7 or 9`);
}

if (favoriteNumber !== 23) console.log(`why not 23`);
*/
/*
const hasDriversLicense = true; //a
const hasGoodVision = true; //b

console.log(hasDriversLicense && hasGoodVision); //And Boolean Logic
console.log(hasDriversLicense || hasGoodVision); //Or Boolean Logic
console.log(!hasDriversLicense); //Not Boolean Logic


if (hasDriversLicense && hasGoodVision) {
    console.log(`Sarah Is Able to Drive`);
} else {
    console.log(`Someone else should drive`);
}

const isTired = false; //c
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah Can Drive`);
} else {
    console.log(`Someone else should drive`);
}
*/
/*
const day = 'sunday';

switch (day) {
    case 'monday': // day === monday
        console.log(`Plan course structure`);
        console.log(`Go to Coding Meetup`);
        break;
    case 'tuesday':
        console.log(`Prepare Theory videos`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`Write code examples`);
        break;
    case 'friday':
        console.log(`Record videos`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Enjoy the weekend`);
        break;
    default:
        console.log(`Not a Valid Day`);
}

if (day === 'monday') {
    console.log(`It is monday`);
} else if (day === 'tuesday') {
    console.log(`It is tuesday`);
} else if (day === 'wednesday' || day === 'thursday') {
    console.log(`It is wednesday or thursday`);
} else if (day === 'friday') {
    console.log(`It is friday`);
} else if (day === 'saturday' || day === 'sunday') {
    console.log(`Enjoy the weekend`);
} else {
    console.log(`${day} is not a real day`);
}
*/
/*
3 + 4c 
1991
true && false && !false
// ^ expresion
if (23 > 10) {
    const str = `23 is bigger`;
}
//^ statement

console.log(`IM ${2037 - 1991} years old`);
*/
/*
const age = 23;
// age >= 18 ? console.log(`I like to drink wine`) : 
// console.log(`I like to drink water`);

const drink = age >= 18 ? `Wine` : `Water`;
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = `Wine`;
} else {
    drink2 = `Water`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `Wine` : `Water`}`);
*/
/*
const bill = 275;

let tip;
console.log(`The bill is ${bill}
The tip percent should be ${bill <= 300 ? tip = .15 : tip = .20}
you should leave a tip of ${tip = bill * tip}
and total is ${bill + tip}`);
*/

const bill = 40;
const tip = bill <= 300 && bill > + 50 ? bill * 0.15 : bill * 0.2;
console.log(`the Bill is ${bill} with tip is ${tip} total bill is ${bill + tip}`);

