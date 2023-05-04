import { render } from '../node_modules/lit-html/lit-html.js';
import { allStudentsTemplate } from './template/studentsTemplate.js';

// function solve() {
//    document.querySelector('#searchBtn').addEventListener('click', onClick);


// }
document.querySelector('#searchBtn').addEventListener('click', onClick);
let tableTbody = document.querySelector('.container tbody');

let students = [];

loadStudents();

async function loadStudents() {
   let response = await fetch('http://localhost:3030/jsonstore/advanced/table');
   let studentsObj = await response.json();

   students = Object.values(studentsObj).map(s => ({
      name: `${s.firstName} ${s.lastName}`,
      course: s.course,
      email: s.email
   }));

   render(allStudentsTemplate(students), tableTbody);
}

function onClick() {
   let inputSearch = document.getElementById('searchField');
   let textSearch = inputSearch.value.toLowerCase();

   let allStudents = students.map(s => Object.assign({}, s));
   let matchedStudents = allStudents
   .filter(s => Object.values(s).some(value => value.toLowerCase().includes(textSearch)));
   matchedStudents.forEach(s => s.class = 'select');

   inputSearch.value = '';
   render(allStudentsTemplate(allStudents), tableTbody);

}