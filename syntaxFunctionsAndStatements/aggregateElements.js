function aggregateElements(array) {

    let sumAllEl = 0;
    let concatAllEl = '';
    let sumInverseValueAllEl = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        sumAllEl += element;
        concatAllEl += element;   
        sumInverseValueAllEl += 1 / element; 
    }
    console.log(sumAllEl);
    console.log(sumInverseValueAllEl);
    console.log(concatAllEl);
}

aggregateElements([1, 2, 3]);