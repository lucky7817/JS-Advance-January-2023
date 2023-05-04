function sameNumbers(num) {

    let arr = String(num).split('').map(n => Number(n));
    let isSame = arr.filter(n => n !== arr[0]).length ? false : true;
    let sum = arr.reduce((acc, number) => acc + number);
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);