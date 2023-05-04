function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    let textElement = document.querySelector('#extra');

    if (buttonElement.textContent === 'More') {
        buttonElement.textContent = 'Less';
        textElement.style.display = 'block';
    } else {
        buttonElement.textContent = 'More';
        textElement.style.display = 'none';
    }
}