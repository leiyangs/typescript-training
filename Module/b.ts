export namespace zoo {
  export class Dog { eat() { console.log("zoo dog") } }
}

export namespace home {
  export class Dog { eat() { console.log("home dog") } }
}

let dog_of_zoo = new zoo.Dog();
dog_of_zoo.eat();

let dog_of_home = new home.Dog();
dog_of_home.eat();
