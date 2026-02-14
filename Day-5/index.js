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

Q. Find Count of all even number from give Range, 0 - 200

var count = 0;
for (var i = 0; i <= 200; i++) {
  if (i % 2 == 0 && i != 0) {
    count++;
  }
}
console.log(count, "- total count");

Q. Print numbers from 100 - 10;

for (var i = 100; i >= 10; i--) {
  console.log(i);
}

While

starting
while(ending){
    sequence
    code
}

for(let i = 1; i <= 100; i++){
    console.log(i)
}

Print numbers from 1-100

let i = 1;
while (i <= 100) {
  console.log(i);
  i++;
}

Q Print count of odd numbers from range 200-300 by using while loop

let count = 0;
let i = 200;
while (i <= 300) {
  if (i % 2 == 1) {
    count++;
  }
  i++;
}
console.log(count, "count");

// var number = "hi" 23 true

var myArray = [
  "hi",
  23,
  true,
  "bich vala element",
  432,
  "dawwa",
  456,
  32,
  3232,
  4353,
  2345,
];
console.log(myArray, "myArray");

console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray.length);
console.log(myArray[myArray.length - 1]);
console.log(Math.floor(23.4));
console.log(Math.ceil(23.4));
if (myArray.length % 2 == 0) {
  console.log(myArray[Math.floor(myArray.length / 2) - 1]);
} else {
  console.log(myArray[Math.floor(myArray.length / 2)]);
}

Given an array and target, find out index of target element .
by using for loop and while loop

var numbers = ["heyey", "hey", "hello", "hi"];
var target = "hi";

let i = 0;
while (i <= numbers.length - 1) {
  if (numbers[i] == target) {
    console.log(i);
  }
  i++;
}

// console.log(numbers[0], numbers[0] == target);
console.log(numbers[1], numbers[1] == target);
console.log(numbers[2], numbers[2] == target);
console.log(numbers[3], numbers[3] == target);
console.log(numbers[4], numbers[4] == target);
console.log(numbers[5], numbers[5] == target);





for (starting; ending; sequence) {}

console.log(numbers.length - 1);
for (let i = 0; i <= numbers.length - 1; i++) {
  //   console.log(numbers[i] == target);
  if (numbers[i] == target) {
    console.log(i, numbers[i]);
  }
}
