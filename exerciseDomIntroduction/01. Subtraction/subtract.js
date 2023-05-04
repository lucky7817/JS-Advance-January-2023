function subtract() {

    let firstNumElement = document.getElementById('firstNumber').value;
    let secondNumElement = document.getElementById('secondNumber').value;

    let result = Number(firstNumElement) - Number(secondNumElement);

    let divResultElement = document.getElementById('result');
    divResultElement.textContent = result;
}