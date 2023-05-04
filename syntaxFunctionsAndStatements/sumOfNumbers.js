function sumOfNumbers(n, m) {

    let nNum = Number(n);
    let mNum = Number(m);

    let sum = 0;
    
    for (let i = nNum; i <= mNum; i++) {
        sum += i;  
    }
    console.log(sum);
}

sumOfNumbers('1', '5');
sumOfNumbers('-8', '20');