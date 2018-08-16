const Cat = require("./Cat");
const Dog = require("./Dog");
const Hamster = require("./Hamster");

class Trainer {
  constructor(animals) {
    this.animals = animals;
  }

  teachAnimalsToMakeSound() {
    this.animals.forEach(animal => animal.makeSound());
  }
}

const nugget = new Cat("golden", 2, "stray", "nugget");
const lucky = new Dog("golden", 2, "stray", "lucky");
const fluffy = new Hamster("golden", 2, "stray", "fluffy");

const jay = new Trainer([nugget, lucky, fluffy]);
jay.teachAnimalsToMakeSound();
