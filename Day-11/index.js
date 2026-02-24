Promise

syntax
Creating Promise





const myPromise = new Promise((resolve, reject) => {
  resolve("success");
  reject("error");
});
// Using a promise

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });










const checkIsNumberEven = new Promise((resolve, reject) => {
  let number = 23456;
  if (number % 2 == 0) {
    resolve("Number is even.");
  } else {
    reject("Number is NOT even.");
  }
});

checkIsNumberEven
  .then((data) => console.log(data, "data"))
  .catch((error) => console.log(error, "error"));

const allPost = new Promise((resolve, reject) => {
  const data = { name: "Awdiz" };
  if (data) {
    resolve(data);
  }
});










const allPost = fetch("https://jsonplaceholder.typicode.com/posts/290");
pending
fulfilled
error
console.log(allPost);
allPost
  .then((data) => {
    console.log(data.body);
  })
  .then((data) => {
    console.log(data.body);
  })
  .catch((error) => {
    console.log(error);
  });






  
{ name: "Awdiz" }; //JAVASCRIPT

{"name" :"Awdiz"} // JSON - JAVASCRIPT object notation 