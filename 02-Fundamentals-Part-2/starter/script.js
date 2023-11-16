//Section 3 #32
'use strict'; // activates strict mode will not work if code is above this

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log(`I Can Drive`);

/*
Strict mode will reserve some words for future use in
JavaScript and will be unusable while in Strictmode
private, Interface, and if are restricted words
*/

// const private = 34;
// const if = 23;

//Section 3 #33
//function can hold one or more complete lines of codes
function logger() {
    console.log(`My name is Brando`);
    console.log(`Success`);
}
//Code that is inside the curly braces is known as a Function Buddy
logger();
//^ Invokeing/Calling/running the Function = using the function

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
fruitProcessor(3, 5);
