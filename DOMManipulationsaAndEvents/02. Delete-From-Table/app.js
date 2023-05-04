function deleteByEmail() {
    let emailElement = Array.from(document.querySelectorAll('tbody tr td:nth-of-type(2)'));
    let input = document.querySelector('label input').value;
    let resultElement = document.querySelector('#result');

    let findElement = emailElement.find(x => x.textContent == input);

    if (findElement) {
        resultElement.textContent = 'Deleted.';
        findElement.parentNode.remove();
    } else {
        resultElement.textContent = 'Not found.'
    }  
}