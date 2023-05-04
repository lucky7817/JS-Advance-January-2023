function subSum(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN
    }

    if (start < 0) {
        start = 0;
    }

    if (end > arr.length - 1) {
        end = arr.length - 1;
    }

    let sum = 0;
    arr.slice(start, end + 1).forEach(x => sum += Number(x));
    return sum;
}

subSum([10, 20, 30, 40, 50, 60], 3, 300);