function lastKNumbersSequence(length, step) {

    let arrForSum = [];
    let arr = [1];
    let sum = 0;

    for (let i = 0; i < length - step; i++) {

        if (arr.length <= step) {
            i = 0;
            arrForSum = arr.slice(i, i + step); 
        } else {
            arrForSum = arr.slice(i, i + step);
        }
         
        for (let n = 0; n < arrForSum.length; n++) {
            sum += arrForSum[n];   
        }
        arr.push(sum);
        sum = 0;
        arrForSum = [];   
    }
    return arr;
}

//lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);