function pieceOfPie(arr, startTarget, endTarget) {

    const startIndex = arr.indexOf(startTarget);
    const endIndex = arr.indexOf(endTarget);

    const result = arr.slice(startIndex, endIndex + 1);
    
    return result;
}

pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie');
