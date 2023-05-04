function circleArea(input) {

    if (typeof input === 'number') {
        let result = (Math.PI * Math.pow(input, 2)).toFixed(2);
        console.log(result)
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
}

circleArea(5);
circleArea('name');