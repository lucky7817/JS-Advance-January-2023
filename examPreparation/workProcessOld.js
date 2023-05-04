function solve() {
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let dayOfBirth = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');
    let sumAddSalary = document.getElementById('sum');

    let tBody = document.getElementById('tbody');


    document.getElementById('add-worker').addEventListener('click', (e) => {
        e.preventDefault();

        if (firstName.value && lastName.value && email.value && dayOfBirth.value && position.value && salary.value) {

            addEmployee(e, firstName.value, lastName.value, email.value, dayOfBirth.value, position.value, salary.value);
            clearInputFields();
        }
    });

    function addEmployee(firstName, lastName, email, dayOfBirth, position, salary) {
        let tr = createElement('tr');
        createElement('td', `${firstName}`, tr);
        createElement('td', `${lastName}`, tr);
        createElement('td', `${email}`, tr);
        createElement('td', `${dayOfBirth}`, tr);
        createElement('td', `${position}`, tr);
        createElement('td', `${salary}`, tr);
        let td = createElement('td', '', tr);
        let fireButton = createElement('button', 'Fired', td);
        fireButton.setAttribute('class', 'fired');
        let editButton = createElement('button', 'Edit', td);
        editButton.setAttribute('class', 'edit');
        tBody.appendChild(tr);

        let currentSalary = Number(sumAddSalary.textContent);
        let addedSalary = Number(salary);
        sumAddSalary.textContent = (currentSalary + addedSalary).toFixed(2);

        editButton.addEventListener('click', (e) => {
            editWorker(e, firstName, lastName, email, dayOfBirth, position, salary);
        });

        fireButton.addEventListener('click', (e) => fireEmployee(e, salary));
    }

    function fireEmployee(e, salary) {
        e.preventDefault();
        e.target.parentNode.parentNode.remove();
        reduceCurrenSalarySum(salary);
    }

    function editWorker(e, fName, lName, emailAddress, birthDay, currPosition, currSalary) {
        e.preventDefault();
        e.target.parentNode.parentNode.remove();

        firstName.value = fName;
        lastName.value = lName;
        email.value = emailAddress;
        dayOfBirth.value = birthDay;
        position.value = currPosition;
        salary.value = currSalary;

        reduceCurrenSalarySum(salary);
    }

    function reduceCurrenSalarySum(salary) {
        let sumSalary = Number(sumAddSalary.textContent);
        sumAddSalary.textContent = Math.abs((Number(salary) - sumSalary)).toFixed(2);
    }

    function createElement(type, content, parent) {
        let element = document.createElement(type);
        element.textContent = content;
        if (parent) {
            parent.appendChild(element)
        }
        return element;
    }

    function clearInputFields() {
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        dayOfBirth.value = '';
        position.value = '';
        salary.value = '';
    }
}
solve()