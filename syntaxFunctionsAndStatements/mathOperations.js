function mathOperations(a, b, operator) {

    let result = 0;

    switch(operator) {
        case '+': result = a + b; console.log(result); break;
        case '-': result = a - b; console.log(result); break;
        case '*': result = a * b; console.log(result); break;
        case '/': result = a / b; console.log(result); break;
        case '%': result = a % b; console.log(result); break;
        case '**': result = (a ** b); console.log(result); break;
    }
}

mathOperations(2, 2, '**');
mathOperations(3, 5.5, '*');