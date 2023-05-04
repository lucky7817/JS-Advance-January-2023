function squareOfStars(input) {

    let oneRow = '* '.repeat(input).trimEnd();

    for (let i = 1; i <= input; i++) {
        console.log(oneRow);        
    }
}

// squareOfStars(1);
 squareOfStars(7);
//squareOfStars(5);