function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: () => console.log("NoM, NOm, nommm"),
  describe: () => console.log("I'm the real ", this.name)
};