function getFibonator() {
    let [start, next] = [0, 1];

    return () => {
        let sum = start + next;
        start = next;
        next = sum;

        return start;
    }  
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13