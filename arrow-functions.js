/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

//function addTwoNumbers(a,b) {
//    return a + b;
//}
//
//let sum = addTwoNumbers(5, 9);
//console.log(sum);

// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    return a + b;
}

let sum = addTwoNumbers(5, 9);
console.log(sum);

// Single Line Arrow Function With Parameters
//const addTwoNumbers2 = (a, b) => (a + b); //Also Valid
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(4, 7)
console.log(sum2);

// Implicit Returns
const speak = message => console.log(message);
speak("Welcome!");

const sayHello = () => console.log("Hello");
sayHello();

// Returning Multiple Lines

const returnMultiLines = () => (
    `<p>
     This is a multiline string!
    </p>`
)

console.log(returnMultiLines());