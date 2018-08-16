const Animal = require("./Animal");

class Hamster extends Animal {
  constructor(color, age, breed, name) {
    super();
    this.color = color;
    this.age = age;
    this.breed = breed;
    this.name = name;
  }

  makeSound() {
    console.log("squeaaaak!!!");
  }
}

module.exports = Hamster;
