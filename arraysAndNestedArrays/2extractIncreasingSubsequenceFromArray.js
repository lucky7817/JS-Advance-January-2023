function extractIncreasingSubsequenceFromArray(arr) {

    let result = [];
    let biggestNum = arr[0];

    result = arr.reduce((acc, currentEl) => {
        if (biggestNum <= currentEl) {
            acc.push(currentEl);
            biggestNum = currentEl;
        }
        return acc;
        
    }, []);
    console.log(result)

}

extractIncreasingSubsequenceFromArray([1, 2, 3, 4]);
extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]);