function extractText() {
    let listItems = document.getElementById('items');
    
    let resulArea = document.getElementById('result');

    resulArea.textContent = listItems.textContent;
   
    console.log(listItems)
}