// Variables 

// var example
var myName = "Nathan"; // string

// let example
let age = 32; // numerical value

// const example
const isStudent = true; // boolean 

// functions

// Named function
function greet() {
    console.log("Hello from a named function!");
}

// Anonymous function stored in a var
const sayBye = function() {
    console.log("Goodbye from an anonymous function!");
};

// Built in function example (math)
console.log(Math.random()); // built in function

// conditional statements

// if / else
    if (age > 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }

 // switch statement
 let day = "Tuesday";
 
 switch(day) {
    case "Monday":
        console.log("Start of the week.");
        break;
        case "Tuesday":
            console.log("Second day of the week.");
            break;
            default:
                console.log("Another day.");
 }

 // Arrays

 let colors = ["red", "blue", "green"]; // array of strings
 let number = [10, 20, 30]; // array of numbers

 // loops

 //loop through an array
 for (let i = 0; i < colors. length; i++) {
    console.log("Color:", colors[i]);
 }