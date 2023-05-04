function stringLength (first, second, third) {

    let lengthOfAll = first.length + second.length + third.length;
    let result = Math.floor(lengthOfAll / 3);

    console.log(lengthOfAll);
    console.log(result);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');