

let car = {
    model: 'BMW',
    year: 2018,
    facelift: true,
    honk() {console.log(`${this.model} make Beep Beep!`);},
    
}
// car.model = 'Mercedes'
// car.honk();

let singleHonk = car.honk
singleHonk()

let otherCar = {
    model: 'Mazda',
}

otherCar.bibitka = singleHonk;
otherCar.bibitka();

function division(a, b) {
    return a / b;
}

let calc = {
    sum(a, b) {return a + b;},
    multiplication: (a, b) => a * b,
    subtraction(a , b) {return a - b;},
};

calc.otherFunc = division
console.log(calc.otherFunc(10, 2));