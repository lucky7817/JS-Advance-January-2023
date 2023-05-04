function addItem() {

    let input = document.querySelector('#newItemText').value;
    let ulElement = document.querySelector('#items');

    let newLiElement = document.createElement('li');
    newLiElement.textContent = input;
    ulElement.appendChild(newLiElement);
}