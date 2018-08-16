const Cat = require("./Cat");
const Dog = require("./Dog");
const Hamster = require("./Hamster");

class Circus {
  constructor(animals) {
    this.animals = animals;
  }

  welcome() {
    this.animals.forEach(animal => {
      animal.makeSound();
    });
  }
}

const nugget = new Cat("golden", 2, "stray", "nugget");
const lucky = new Dog("golden", 2, "stray", "lucky");
const fluffy = new Hamster("golden", 2, "stray", "fluffy");
const jumpstartCircus = new Circus([nugget, lucky, fluffy]);
jumpstartCircus.welcome();
