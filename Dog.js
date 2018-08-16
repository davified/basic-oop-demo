const Animal = require("./Animal");

class Dog extends Animal {
  constructor(color, age, breed, name) {
    super();
    this.color = color;
    this.age = age;
    this.breed = breed;
    this.name = name;
  }

  makeSound() {
    console.log("wooof!!!");
  }
}

module.exports = Dog;
