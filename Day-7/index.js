Data types - String, number, Boolean, undefined
varibles - var, let, const
hositing , scopes
Operators -
1. Comparision == , ===, > < >= <= != !==
2. Logical  $$ ||
Conditional Statement
1. if else
2. switch
Loops
for
while
Math.floor()
Math.ceil()
array
object
function

var age = 18;
var userData = {};
if (age == 18) {
  userData.learningLiscence = true;
} else {
  userData.dl = true;
}

console.log(userData);

function

syntax

function nameoffunction(para1, para2, para3){
    multiple lines of code
}
nameoffunction();






var number1 = 234;
var number2 = 456;

function addition(number1, number2) {
  //   console.log(number1, "value1", number2, "value2");
  //   console.log("Inside addition function");
  //   console.log(number1 + number2); // calculation and printing
  return number1 + number2;
}
const output = addition(number1, number2);
console.log(output);




const subtraction = function () {
  console.log("Hello");
};
subtraction()





const mulitplication = (num1, num2) => {
  return num1 * num2;
  console.log("hi")
};
const output = mulitplication(12, 23);
console.log(output, "output");








Q by using function return the given number is even or odd

let number = 233;

const checkOddEven = (number) => {
  if (number % 2 == 0) { 
    return "its even number.";
  } else {
    return "its odd number";
  }
};
const output = checkOddEven(number);
console.log(output, "output");
