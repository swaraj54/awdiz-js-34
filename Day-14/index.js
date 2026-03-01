// Event Loop

console.log(1);

setTimeout(() => {
  console.log(2);
}, 5000);

setTimeout(() => {
  console.log(3);
}, 0);

console.log(4);

Promise.resolve().then(() => {
  console.log(5);
});

console.log(6);
