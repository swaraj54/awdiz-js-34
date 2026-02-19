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
array methods
object
function

array methods

Push
Pop
Shift
Unshift
Map

Push;

var numbers = [1, 2, 3];
numbers.push(4);
numbers.push(5, 6);
console.log(numbers);

var numbers = [1, 2, 3, 4];
let lastElement = numbers.pop();
let secondLastElement = numbers.pop();
console.log(numbers, lastElement, secondLastElement);

Shift;

const numbers = [1, 2, 3];
numbers.shift();
numbers.shift();
console.log(numbers);

Unshift;

const numbers = [2, 3, 4];
numbers.unshift("1");
console.log(numbers);

Map

let prices = [100, 150, 200];
let gstAddedPrices = prices.map((element) => element * 1.18);
console.log(gstAddedPrices, "gstaddedProducts");
console.log(prices, "prices");

let numbers = [1, 2, 3, 4, 5, 6];
let oddElement = numbers.filter((element) => element % 2 == 1);
console.log(oddElement);

var users = [
  { name: "virat", active: true },
  { name: "virat", active: false },
  { name: "virat", active: false },
];
let activeUsers = users.filter((user) => user.active);
console.log(activeUsers, "activeUsers");

Sum of numbers
let numbes = [1, 2, 3, 4, 5];

const addition = numbes.reduce((acc, curr) => acc + curr, 100);
console.log(addition);

let numbers = [1, 2, 3, 4, 5, "trrue", false];
const countOfElement = numbers.reduce((acc, curr) => acc + 1, 0);
console.log(countOfElement);

let numbers = [1, 4, 10, 6, 12, 9];
let maxNumber = numbers.reduce((acc, curre) => (curre > acc ? curre : acc), 0);
console.log(maxNumber);

const myObject = {
  name: "Awdiz",
  greet: (num) => {
    console.log("Hello everyone!");
    return num * 2;
  },
};

console.log(myObject.name, "myObject");
console.log(myObject.greet, "myObject");
console.log(myObject.greet(10), "myObject");
