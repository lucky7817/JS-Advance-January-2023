function sayHi() {
    console.log(`${this.name} says hi!`)
}

const person = {
    name: 'Dilyan',
    age: 32,
    sayHi
};

const person2 = {
    name: 'John',
    age: 33,
    sayHi
}

person.sayHi();
person2.sayHi()
