let arr = [11, 2, 13, 4, 5, 6];

let max = arr.reduce(callback, -Infinity)

function callback(accumulator, value) {
    if (accumulator > value) {
        return accumulator;
    } else {
        return value;
    }
}

console.log(max)