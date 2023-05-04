function cookingByNumbers(...param) {

    let num = param.shift(Number(param[0]));

    for (const operation of param) {

        switch(operation) {
            case 'chop': num /= 2; console.log(num); break;
            case 'dice': num = Math.sqrt(num); console.log(num); break;
            case 'spice': num += 1; console.log(num); break;
            case 'bake': num *= 3; console.log(num); break;
            case 'fillet': num = num - num * 0.2; console.log(num); break
        }  
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
//cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake','fillet');