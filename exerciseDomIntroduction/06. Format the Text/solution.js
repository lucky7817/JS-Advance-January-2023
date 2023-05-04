function solve() {
  let textElement = document.querySelector('#input');
  let textElementArr = textElement.value.split('.').filter(x => x !== '');
  let divOutputElement = document.getElementById('output');

  while(textElementArr.length > 0) {

    let firstThreeSentences = textElementArr.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = firstThreeSentences;
    divOutputElement.appendChild(p);


  }
}