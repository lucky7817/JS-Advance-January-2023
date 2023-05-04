function solve() {
  let inputTextElement = document.getElementById('text').value;
  let typeOfText = document.getElementById('naming-convention').value;

  let result = '';

  let inputToUperCase = inputTextElement.toUpperCase();

  for (let i = 0; i < inputToUperCase.length; i++) {
    
    if (typeOfText === 'Camel Case') {
      
      if (inputToUperCase[i] !== ' ') {
        result += inputToUperCase[i].toLowerCase();

      } else if (inputToUperCase[i] === ' ') {
        result += inputToUperCase[i + 1].toUpperCase();
        i++
      }

    } else if (typeOfText === 'Pascal Case') {

      if (inputToUperCase[i] !== ' ' && i === 0) {
        result += inputToUperCase[i].toUpperCase();

      } else if (inputToUperCase[i] !== ' ') {
        result += inputToUperCase[i].toLowerCase();

      } else if (inputToUperCase[i] === ' ') {
        result += inputToUperCase[i + 1].toUpperCase();
        i++;
      }

    } else {
      result += 'Error!';
      break;
    }
  }

  let resultElement = document.getElementById('result');
  resultElement.textContent = result; 
}