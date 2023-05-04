let firstNameField = document.querySelector('.inputs input[name=firstName');
let lastNameField = document.querySelector('.inputs input[name=lastName');
let facultyNumberField = document.querySelector('.inputs input[name=facultyNumber');
let gradeField = document.querySelector('.inputs input[name=grade');

let table = document.getElementById('results');
let tBody = document.querySelector('#results tbody')

let buttonSubmit = document.getElementById('submit');
buttonSubmit.addEventListener('click', onClick);
let url = 'http://localhost:3030/jsonstore/collections/students';

async function getStudents() {

    let students = {
        firstName,
        lastName,
        facultyNumber,
        grade,
    };
    let response = await fetch(url);
    let data = await response.json();

    Object.values(data).forEach(x => {
        students.firstName = x.firstName;
        students.lastName = x.lastName;
        students.facultyNumber = x.facultyNumber;
        students.grade = x.grade;
        
        let trInTbody = document.createElement('tr');
        tBody.appendChild(trInTbody);

        let tdFirstName = document.createElement('td');
        let tdLastName = document.createElement('td');
        let tdFacultyNumber = document.createElement('td');
        let tdGrade = document.createElement('td');

        tdFirstName.textContent = students.firstName;
        tdLastName.textContent = students.lastName;
        tdFacultyNumber.textContent = students.facultyNumber ;
        tdGrade.textContent = students.grade;

        trInTbody.appendChild(tdFirstName);
        trInTbody.appendChild(tdLastName);
        trInTbody.appendChild(tdFacultyNumber);
        trInTbody.appendChild(tdGrade);
    });
}

async function onClick(e) {
    e.preventDefault();
    tBody.innerHTML = '';
    
    firstName = firstNameField.value;
    lastName = lastNameField.value;
    facultyNumber = facultyNumberField.value;
    grade = gradeField.value;

    if (firstName !== '' && lastName !== '' && facultyNumber !== '' && grade !== '') {
        let students = {
            firstName,
            lastName,
            facultyNumber,
            grade,
        };

        let postStudent = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(students),
        });

        firstNameField.value = '';
        lastNameField.value = '';
        facultyNumberField.value = '';
        gradeField.value = '';
    } 
    getStudents()
}




