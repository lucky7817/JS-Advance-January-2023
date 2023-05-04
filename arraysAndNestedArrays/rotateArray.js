function rotateArray(arr, numOfRatations) {

    let strToBeRotate = '';
    let counter = 0;

    while (counter !== numOfRatations) {
        strToBeRotate = arr.pop();
        arr.unshift(strToBeRotate);
        counter++;
    }
    console.log(arr.join(' '));
}

rotateArray(['1', '2' ,'3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);