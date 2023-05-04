import { html, render } from '../node_modules/lit-html/lit-html.js';

let url = 'http://localhost:3030/jsonstore/advanced/dropdown';

async function getOptions() {
    let response = await fetch(url);
    return await response.json();
}

const selectTemplate = (data) => html`
<select id="menu">
    ${data.map(el => html`<option value=${el._id}>${el.text}</option>`
    )}
</select>
`;

let options = Object.values(await getOptions());
let main = document.querySelector('div');

update(options);

function update(options) {
    let result = selectTemplate(options);
    render(result, main);
}

document.querySelector('form').addEventListener('submit', addItem);

async function addItem(e) {
    e.preventDefault();

    if (document.getElementById('itemText').value !== '') {

        let text = document.getElementById('itemText').value;

        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text })
        });

        options.push(await response.json());
        update(options);
    }
    document.getElementById('itemText').value = '';

}