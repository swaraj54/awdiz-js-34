function one() {
  two();
}

function two() {
  three();
}

function three() {
  console.log("hi");
}

three();

console.log("Start");

console.log("Processing... ");

console.log("End");

function longRun() {
  for (let i = 0; i < 100000000000; i++) {}
}
console.log("before");
longRun();
console.log("after");

setTimeout(() => {
  console.log("Hi after 5 sec delay.");
}, 10000); //call only single time
var counter = 0;
const intervalId = setInterval(() => {
  console.log("Hi");
  counter++;
  if (counter == 3) {
    console.log(counter);
    clearInterval(intervalId);
  }
}, 2000); // call multiple times

console.log("before");
// setTimeout(() => {
//   console.log("set time out");
// }, 2000);
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data));

console.log("after");
