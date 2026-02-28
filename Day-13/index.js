function Addmission(name, number) {
  this.name = name;
  this.number = number;
}

Addmission.prototype.greet = function () {
  return "welcome";
};

const student1 = new Addmission("virat", 876543);
console.log(student1.greet(), "student1");

const student2 = new Addmission("rohir", 876543);
console.log(student2, "student2");



class data {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello ${this.name}`;
  }

  knowYourAge() {
    return `Your age is ${this.age}`;
  }
}
const user1 = new data("Virat", "34");
console.log(user1.greet(), "greet");
console.log(user1.knowYourAge(), "knowYourAge");

const user2 = new data("Rohit", "40");
console.log(user2.greet(), "greet");
console.log(user2.knowYourAge(), "knowYourAge");
