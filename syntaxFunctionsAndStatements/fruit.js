function fruit (fruit, weightGrams, priceKg) {

    let weightGramsInKg = (weightGrams / 1000);
    let totalMoney = (weightGramsInKg * priceKg).toFixed(2);

    console.log(`I need $${totalMoney} to buy ${weightGramsInKg.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);