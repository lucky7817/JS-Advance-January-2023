function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    
    let createOptionToSelect = document.createElement('option');
    createOptionToSelect.textContent = text.value;
    createOptionToSelect.value = value.value;
    let selectTag = document.getElementById('menu');
    selectTag.appendChild(createOptionToSelect);
    text.value = "";
    value.value = "";
}