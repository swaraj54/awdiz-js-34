// Data types - String, number, Boolean, undefined
// varibles - var, let, const
// hositing , scopes
// Operators -
// 1. Comparision == , ===, > < >= <= != !==
// 2. Logical  $$ ||
// Conditional Statement
// 1. if else
// 2. switch
// Loops
// for
// while
// Math.floor()
// Math.ceil()
// array
// array methods
// object
// function
// array methods
// Push
// Pop
// Shift
// Unshift
// Map
// filter
// reduce

// Scopes ---
// Global Scope
// Function scope
// block scope
// lexical scope

// Closure

// Global Scope

// var globalscopevar = "hi";

// function add() {
//   console.log(globalscopevar);
// }

// add();

// Function Scope

// function add() {
//   let num = 2;
//   return num;
// }
// console.log(add());
// console.log(num, "num");

// if (true) {
//   let num = 2;
//   console.log(num);
// }
// if(){}else{}
// for(){}
// while(){}
// switch(){}
// {}
// console.log(num, "num");

// Lexical Scope

// function outer() {
//   var outerFunctionVar = "Hii";
//   function inner() {
//     console.log(outerFunctionVar);
//   }
//   inner();
// }
// outer();

// Closure

// function outer() {
//   var outFunctionVar = 20;
//   return function inner() {
//     console.log(outFunctionVar);
//   };
// }

// const myFunc = outer();
// myFunc();

// function outer() {
//   var outFunctionVar = 20;
//   return function inner() {
//     outFunctionVar++;
//     console.log(outFunctionVar);
//   };
// }

// const myFunc1 = outer();
// myFunc1();
// myFunc1();

// const myFunc2 = outer();
// myFunc2();

function logic() {
  var initialValue = 0; 5 
  return {
    add: function add(value) {
      initialValue += value;
      return initialValue;
    },
    reset() {
      initialValue = 0;
      return initialValue;
    },
    sub: function sub(value) {
      initialValue -= value;
      return initialValue;
    },
  };
}

const calculator = logic();
console.log(calculator.add(2));
console.log(calculator.reset());
console.log(calculator.add(5));
console.log(calculator.sub(10));
