function extractIncreasingSubsequenceFromArray(arr) {

    let result = [];
    let biggestNum = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] >= biggestNum) {
            result.push(arr[i])
            biggestNum = result[result.length - 1];
        }
    }
    return result;
}

extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);