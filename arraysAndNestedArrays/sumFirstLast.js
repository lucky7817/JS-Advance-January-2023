function sumFirstLast(arr) {

    let result = arr.map(n => Number(n));

    let sum = (result[0] + result[result.length - 1]);
    return sum;
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);