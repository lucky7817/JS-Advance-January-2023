function negativePositiveNumbers(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < 0) {
            result.unshift(arr[i]);
        } else {
            result.push(arr[i])
        }   
    }
    console.log(result.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);