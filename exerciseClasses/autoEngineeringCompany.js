function autoCompany(input) {
    let carsMap = new Map();

    for (const cars of input) {
        let [carBrand, carModel, producedCars] = cars.split(' | ');

        if (!carsMap.has(carBrand)) {
            carsMap.set(carBrand, new Map());
        }

        let modelsMap = carsMap.get(carBrand);
        
        if (!modelsMap.has(carModel)) {
            modelsMap.set(carModel, 0);
        }

        modelsMap.set(carModel, modelsMap.get(carModel) + Number(producedCars));   
    }

    for (const brand of carsMap.keys()) {
        console.log(brand);
        let modelsMap = carsMap.get(brand);

        for (const model of modelsMap.keys()) { 
            console.log(`###${model} -> ${modelsMap.get(model)}`);
            
        }   
    }
}

autoCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);