function biggerHalf(arr) {

    let result = arr.sort((a, b) => a - b);
    let newArr = [];

    let startIndex = Math.floor(arr.length / 2);
    
    for (let i = startIndex; i < result.length; i++) {
        newArr.push(result[i]); 
    }
    return newArr;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);