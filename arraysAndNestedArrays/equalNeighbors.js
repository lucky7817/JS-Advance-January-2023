function equalNeighbors(matrix) {

    let counter = 0;

    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            for (let k = 0; k < matrix[i + 1].length; k++) {

                if (matrix[i][j] === matrix[i + 1][k] || matrix[i][k] === matrix[i][k + 1]) {
                    counter++;
                    j++;
                } else {
                    j++;
                    continue;
                }
            }
        }
    }

    for (let n = 0; n < matrix.length - 1; n++) {
        if (matrix[matrix.length - 1][n] === matrix[matrix.length - 1][n + 1]) {
            counter++;
        }

    }
    //return counter;
    console.log(counter);
}

equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);
equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);
equalNeighbors([[2, 2, 5, 7, 4],
                [4, 0, 5, 3, 4],
                [2, 5, 5, 4, 2]]);