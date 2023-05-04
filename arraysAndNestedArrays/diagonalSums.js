function diagonalSums(arr) {

    let sum1 = 0;
    let sum2 = 0;
    let newArray1 = [];
    let newArray2 = [];

    for (let i = 0; i < arr.length; i++) {
        newArray1.push(arr[i][i]);
    }

    for (let j = 0; j < arr.length; j++) {
        for (let k = arr[j].length - 1; k >= 0; k--) {
            newArray2.push(arr[j][k]);
            j++;
        }
    }
    sum1 = newArray1.reduce((a, b) => a + b);
    sum2 = newArray2.reduce((a, b) => a + b);

    console.log(`${sum1} ${sum2}`);
}

diagonalSums([[20, 40],
[10, 60]]);
diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);