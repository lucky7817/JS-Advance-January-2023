class CarDealership {
    constructor(name, availableCars = [], soldCars = [], totalIncome = 0) {
        this.name = name;
        this.availableCars = availableCars;
        this.soldCars = soldCars;
        this.totalIncome = totalIncome;
    }

    addCar(model, horsepower, price, mileage) {
        this.model = model;
        this.horsepower = horsepower;
        this.price = price;
        this.mileage = mileage;

        if (model === '') {
            throw new Error('Invalid input!');
        } else {
            this.availableCars.push({ model, horsepower, price, mileage });
            return `New car added: ${model} - ${horsepower} HP - ${Number(mileage).toFixed(2)} km - ${Number(price).toFixed(2)}$`;
        }
    }

    sellCar(model, desiredMileage) {
        this.model = model;
        this.desiredMileage = desiredMileage;

        for (const objCar of this.availableCars) {
            let currentIndex = this.availableCars.indexOf(objCar);

            if (objCar['model'] === this.model) {
                let differenceMileage = objCar.mileage - desiredMileage;
                let soldPrice = 0;

                if (objCar.mileage <= desiredMileage) {
                    this.soldCars.push({ model: objCar.model, horsepower: objCar.horsepower, price: objCar.price });
                    this.totalIncome += Number(objCar.price);
                    soldPrice = Number(objCar.price).toFixed(2);
                    this.availableCars.splice(currentIndex, 1);
                    currentIndex = 0;
                    return `${model} was sold for ${soldPrice}$`;

                    // currentIndex = this.availableCars.indexOf(objCar);
                    // let soldCar = this.availableCars.splice(currentIndex, 1);
                    // this.soldCars.push(soldCar);
                    // for (const soldCar of this.soldCars) {
                    //     let indexSoldCar = this.soldCars.indexOf(soldCar);

                    //     delete this.soldCars[indexSoldCar].mileage;
                    //     console.log(this.soldCars);

                    // }
                } else if (differenceMileage <= 40) {
                    objCar.price -= (Number(objCar.price) * 0.05);
                    this.soldCars.push({ model: objCar.model, horsepower: objCar.horsepower, price: objCar.price });
                    this.totalIncome += Number(objCar.price);
                    soldPrice = Number(objCar.price).toFixed(2);
                    this.availableCars.splice(currentIndex, 1);
                    currentIndex = 0;
                    return `${model} was sold for ${soldPrice}$`;

                } else {
                    objCar.price -= (Number(objCar.price) * 0.1);
                    this.soldCars.push({ model: objCar.model, horsepower: objCar.horsepower, price: objCar.price });
                    this.totalIncome += Number(objCar.price);
                    soldPrice = Number(objCar.price).toFixed(2);
                    this.availableCars.splice(currentIndex, 1);
                    currentIndex = 0;
                    return `${model} was sold for ${soldPrice}$`;
                }

            } else {
                throw new Error(`${this.model} was not found!`);
            }

        }
    }

    currentCar() {
        let allAvalableCars = '';

        for (const leftCar of this.availableCars) {
            
            if (this.availableCars.length <= 0) {
                return 'There are no available cars';
            } else {

                allAvalableCars += `---${leftCar.model} - ${leftCar.horsepower} HP - ${leftCar.mileage.toFixed(2)} km - ${leftCar.price.toFixed(2)}$\n`;
            }
        }
return `-Available cars:
${allAvalableCars}`

    }

    salesReport(criteria) {

        let finalResult = '';

        if (criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        } else if (criteria === 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else if (criteria === 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }

        for (const allSoldCars of this.soldCars) {
            finalResult += `---${allSoldCars.model} - ${allSoldCars.horsepower} HP - ${allSoldCars.price}$\r\n`
        }
        return `-${this.name} has a total income of ${this.totalIncome}$
-${this.soldCars.length} cars sold:
${finalResult}`
    }
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500,
//     190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// dealership.sellCar('Toyota Corolla', 230000);
// dealership.sellCar('Mercedes C63', 110000);
// console.log(dealership.salesReport('horsepower'));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());
