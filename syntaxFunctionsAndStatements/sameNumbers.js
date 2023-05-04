function sameNumbers(num) {

    let numToStr = num.toString();
    let sum = 0;
    let isSame = true;
    let firstSimbol = numToStr[0];
    
    for (let i = 0; i < numToStr.length; i++) {
        if (firstSimbol !== numToStr[i]) {
            isSame = false;
        }
        sum += Number(numToStr[i]);    
    }
    console.log(isSame);
    console.log(sum);       
}

sameNumbers(2222222);
sameNumbers(1234);