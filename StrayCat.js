const Cat = require("./Cat");

class StrayCat extends Cat {}

const garbage = new StrayCat();
garbage.makeSound();
