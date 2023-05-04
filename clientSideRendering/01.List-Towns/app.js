import { html, render } from '../node_modules/lit-html/lit-html.js';

document.getElementById('btnLoadTowns').addEventListener('click', getTowns);


const listTamplate = (data) => html`
<ul>
    ${data.map(town => html`<li>${town}</li>`)}
</ul>
`

function getTowns(event) {
    event.preventDefault();

    if (document.getElementById('towns').value !== '') {
        let root = document.getElementById('root');
        let inputTowns = document.getElementById('towns').value.split(', ');

        //let ul = document.createElement('ul');

        let result = listTamplate(inputTowns);

        render(result, root);

        // inputTowns.map(el => {
        //     let li = document.createElement('li');
        //     li .textContent = el;
        //     ul.appendChild(li);
        // })
        // root.appendChild(ul);


        document.getElementById('towns').value = '';
    }
}