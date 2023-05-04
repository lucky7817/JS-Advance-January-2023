function biggestElement(arr) {

    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray.push(Math.max(...arr[i]));
    }
    return Math.max(...newArray);
}

biggestElement([[20, 50, 10],
[8, 33, 145]]);
biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]);