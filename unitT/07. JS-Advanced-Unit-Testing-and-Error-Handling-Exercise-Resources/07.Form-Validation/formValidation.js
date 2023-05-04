function validate() {
    let usernamePattern = /^([A-za-z0-9]{3,20})$/gm;
    let passPattern = /^([\w]{5,15})$/gm;
    let emailPattern = /(^[\w]+@[\w]+\.[\w]+$)/gm;

    let inputUsername = document.getElementById('username');
    let inputEmail = document.getElementById('email');
    let inputPassword = document.getElementById('password');
    let inputConfirmPass = document.getElementById('confirm-password');
    let checkBoxIsCompany = document.getElementById('company');

    let validText = document.getElementById('valid');
    let companyInfoText = document.getElementById('companyInfo');
    let companyNumber = document.getElementById('companyNumber');

    let isValidInput = true;
    let isChecked = false;

    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', onClick);

    function onClick(event) {

        event.preventDefault();

        if (!usernamePattern.test(inputUsername.value)) {
            isValidInput = false;
            inputUsername.style.borderColor = 'red';
        } else {
            inputUsername.style.borderColor = 'none';
        }

        if (!emailPattern.test(inputEmail.value)) {
            isValidInput = false;
            inputEmail.style.borderColor = 'red';
        } else {
            inputEmail.style.borderColor = 'none';
        }

        if (!passPattern.test(inputPassword.value) && passPattern.test(inputConfirmPass.value) ||
        inputPassword.value !== inputConfirmPass.value) {
            isValidInput = false;
            inputPassword.style.borderColor = 'red';
            inputConfirmPass.style.borderColor = 'red';
        } else {
            inputPassword.style.borderColor = 'none';
            inputConfirmPass.style.borderColor = 'none';
        }

        // if (inputPassword.value !== inputConfirmPass.value) {
        //     isValidInput = false;
        //     inputConfirmPass.style.borderColor = 'red';
        // } else {
        //     if (!passRed) {
        //         inputConfirmPass.style.borderColor = 'none';
        //     }
        // }

        if (isValidInput) {
            validText.style.display = 'block';
        } else {
            validText.style.display = 'none';
        }

        if (isChecked) {
            if (Number(companyNumber.value) < 1000 || Number(companyNumber.value > 9999)) {
                companyNumber.style.borderColor = 'red';
            } else {
                companyNumber.style.borderColor = 'none';
            }
        }
    }

    checkBoxIsCompany.addEventListener('change', (event) => {
        if (event.target.checked) {
            isChecked = true;
            companyInfoText.style.display = 'block';
        } else {
            isChecked = false;
            companyInfoText.style.display = 'none';
        }

    });
}   
