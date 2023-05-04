// function sayHi() {
//     console.log(`${this.name} says hi!`)
// }

const person = {
    name: 'Dilyan',
    age: 32,
    sayHi() {
        console.log(`${this.name} says hi!`)
    }

};
person.sayHi();

const myFn = person.sayHi;

const person2 = {
    name: 'John',
    age: 33,
    sayHi: myFn,
}
person2.sayHi()