function addItem() {
    let input = document.getElementById('newItemText').value;
    let ulElement = document.getElementById('items');
    
    let liElement = document.createElement('li');
    liElement.textContent = input;
    ulElement.appendChild(liElement);

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    deleteElement.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    })
    liElement.appendChild(deleteElement);   
}