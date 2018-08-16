const Animal = require("./Animal");

class Cat extends Animal {
  constructor(color, age, breed, name) {
    super();
    this.color = color;
    this.age = age;
    this.breed = breed;
    this.name = name;
  }

  makeSound() {
    console.log("meeeow!!");
  }
}

module.exports = Cat;
