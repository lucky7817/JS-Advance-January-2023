function validate() {
    document.getElementById('email').addEventListener('change', onChange);

    function onChange(event) {
        let pattern = /[a-z]+[@]{1}[a-z]+[.]{1}[a-z]+/gm;

        if (pattern.test(event.target.value)) {
            event.target.classList.remove('error');
        } else {
            event.target.classList.add('error');
        }
    }
}