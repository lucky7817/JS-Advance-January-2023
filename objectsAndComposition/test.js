
const person = {
    name: 'Dilyan',
    age: 25,
    sayHi(personName) {
        console.log(`Hello ${personName}!`);
    }
};

person.sayHi('Dony');

const { sayHi } = person;
//console.log(sayHi);

const person2 = {
    name: 'John',
    age: 32,
    sayHi
}

person2.sayHi('Mary');








