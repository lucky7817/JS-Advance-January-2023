function processOddPositions(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result.map(n => n * 2).reverse().join(' ')
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);