window.addEventListener("load", solve);

function solve() {

  let selectProdType = document.getElementById('type-product');
  let descriptionEl = document.getElementById('description');
  let clientNameEl = document.getElementById('client-name');
  let clientPhoneEl = document.getElementById('client-phone');
  let buttonSend = document.querySelector('form button');
  console.log(buttonSend);
  let receivedOrders = document.getElementById('received-orders');
  let completeOrders = document.getElementById('completed-orders');
  let buttonClear = document.querySelector('.clear-btn');

  buttonSend.addEventListener('click', (e) => {
    e.preventDefault();

    let description = descriptionEl.value;
    let clientName = clientNameEl.value;
    let clientPhone = clientPhoneEl.value;
    let selectProd = selectProdType.value;

    if (description === '' || clientName === '' || clientPhone === '') {
      return;
    }

    descriptionEl.value = '';
    clientNameEl.value = '';
    clientPhoneEl.value = '';

    let div = document.createElement('div');
    let divH2 = document.createElement('h2');
    let divH3 = document.createElement('h3');
    let divH4 = document.createElement('h4');

    div.classList.add('container');

    if (selectProd === 'Computer') {
      divH2.textContent = `Product type for repair: ${selectProd}`;
      divH3.textContent = `Client information: ${clientName}, ${clientPhone}`;
      divH4.textContent = `Description of the problem: ${description}`;

    } else {
      divH2.textContent = `Product type for repair: ${selectProd}`;
      divH3.textContent = `Client information: ${clientName}, ${clientPhone}`;
      divH4.textContent = `Description of the problem: ${description}`;
    }

    let buttonStartRepair = document.createElement('button');
    let buttonFinishRepair = document.createElement('button');

    buttonStartRepair.classList.add('start-btn');
    buttonStartRepair.textContent = 'Start repair';
    buttonFinishRepair.classList.add('finish-btn');
    buttonFinishRepair.textContent = 'Finish repair';

    div.appendChild(divH2);
    div.appendChild(divH3);
    div.appendChild(divH4);
    div.appendChild(buttonStartRepair);
    div.appendChild(buttonFinishRepair);

    receivedOrders.appendChild(div);

    buttonFinishRepair.disabled = true;

    buttonStartRepair.addEventListener('click', (e) => {
      buttonStartRepair.disabled = true;
      if (buttonStartRepair.disabled = true) {
        buttonFinishRepair.disabled = false;
      }
    });

    let divInComplOrd = document.createElement('div');
    let divCompOrdH2 = document.createElement('h2');
    let divCompOrdH3 = document.createElement('h3');
    let divCompOrdH4 = document.createElement('h4');
    divInComplOrd.classList.add('container');

    divCompOrdH2.textContent = divH2.textContent;
    divCompOrdH3.textContent = divH3.textContent;
    divCompOrdH4.textContent = divH4.textContent;

    divInComplOrd.appendChild(divCompOrdH2);
    divInComplOrd.appendChild(divCompOrdH3);
    divInComplOrd.appendChild(divCompOrdH4);

    //let divContainer = document.querySelector('.container');

    buttonFinishRepair.addEventListener('click', () => {

      completeOrders.appendChild(divInComplOrd);
      //divContainer.remove();
      div.remove();
    });

    let divContainer2 = document.querySelector('.completed-orders div .container');
    console.log(divContainer2);

    buttonClear.addEventListener('click', () => {
      divInComplOrd.remove();
    });
  });
}
