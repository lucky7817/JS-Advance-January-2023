function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach(button =>
        button.addEventListener('click', onClick));

    function onClick(event) {
        let parent = event.target.parentElement;
        let unlockedCheck = parent.querySelector('input[value="unlock"]');

        if (unlockedCheck.checked) {
            let hiddenDiv = parent.querySelector('div');
            hiddenDiv.style.display === 'block'
                ? hiddenDiv.style.display = 'none'
                : hiddenDiv.style.display = 'block';

            event.target.textContent === 'Show more'
                ? event.target.textContent = 'Hide it'
                : event.target.textContent = 'Show more';
        }
    }
}