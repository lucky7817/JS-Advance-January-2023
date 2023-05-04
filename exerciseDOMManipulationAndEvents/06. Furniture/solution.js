function solve() {

  let [generateButton, buyButton] = (Array.from(document.querySelectorAll('button')));

  generateButton.addEventListener('click', generate);
  buyButton.addEventListener('click', buy);

  function generate() {
    let input = JSON.parse(document.querySelector('textarea').value);
    input.forEach(el => {
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let img = document.createElement('img');
      img.src = el.img;
      td1.appendChild(img);
      tr.appendChild(td1);
      let p1 = document.createElement('p');
      let td2 = document.createElement('td');
      p1.textContent = el.name;
      td2.appendChild(p1);
      tr.appendChild(td2);
      let td3 = document.createElement('td');
      let p2 = document.createElement('p');
      p2.textContent = Number(el.price);
      td3.appendChild(p2);
      tr.appendChild(td3);
      let td4 = document.createElement('td');
      let p3 = document.createElement('p');
      p3.textContent = Number(el.decFactor);
      td4.appendChild(p3);
      tr.appendChild(td4);
      let td5 = document.createElement('td');
      let input = document.createElement('input')
      input.type = "checkbox";
      td5.appendChild(input)
      tr.appendChild(td5);
      document.querySelector('tbody').appendChild(tr);

    });

  }

  function buy() {
    let checkBoxes = Array.from(document.querySelectorAll('tbody input')).filter(x => x.checked);
    let bought = [];
    let price = 0;
    let decoration = 0;
    checkBoxes.forEach(element => {
      let parent = element.parentElement.parentElement;
      let data = Array.from(parent.querySelectorAll('p'));
      bought.push(data[0].textContent);
      price += Number(data[1].textContent);
      decoration += Number(data[2].textContent);
    })
    let output = document.querySelectorAll('textarea')[1];
    output.textContent += `Bought furniture: ${bought.join(', ')}\r\n`
    output.textContent += `Total price: ${price.toFixed(2)}\r\n`;
    output.textContent += `Average decoration factor: ${decoration / checkBoxes.length}`;
  }
  
}