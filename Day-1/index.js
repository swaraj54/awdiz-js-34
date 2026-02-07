1. Data types

"^%$DCFGVHBj4356" '123' `kucbhi` - string
12345 - Number
true false - Boolean



console.log(123 - 100); // print , calculation




console.log("hello", typeof "hello");
console.log("hello", typeof "hello");
console.log(`hello`, typeof `hello`);
console.log(123, typeof 123);
console.log(true, typeof true);
console.log(false, typeof false);
console.log("false", typeof "false");






2. Varibles - store data with any data type
var let const

var varibleName = data

var name = "Awdiz"
var surname = "Institute"
var age = 11
var isOpen = true

= it is used to assign




var age1 = 30;
var age1 = "30";
var age1 = true;
console.log(age1, typeof age1, "age1");






var age = 10;
//assign;
console.log(age, "age old");
age = "hjello"; //re assign
console.log(age, "age new");

var age = 20; // re declare
console.log(age, "age new 2");





let number = 20;
console.log(number,"number")
number = 21
console.log(number,"number")
let number = 23
console.log(number, "number")





const number2 = 20;
console.log(number2, "number2");
number2 = 21;
console.log(number2, "Number2 2");
const number2 = 345;
console.log(number2, "number 3");

        1. Re assign      2. Re declare    3. scope     4. hoisting
var         yes                yes           global
let         yes                no            block
const       no                 no            block




{
  const age = 50;
}
console.log(age);





let a = 20;
{
  var b = 30;
  {
    console.log(a); // 20
    const c = 40;
  }
  console.log(c);
}
console.log(b); // 30
