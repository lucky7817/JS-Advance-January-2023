function greatestCommonDivisor(firstNum, secondNum) {

    let array = [];

    for (let i = 2; i < 100; i++) {

        if (firstNum % i === 0 && secondNum % i === 0) {
            array.push(i);
        } else {
            continue;
        }   
    }
    let maxNum = Math.max(...array);
    console.log(maxNum);
}

greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458);