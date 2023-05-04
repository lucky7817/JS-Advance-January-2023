function attachEvents() {
    let url = 'http://localhost:3030/jsonstore/phonebook';
    let ul = document.getElementById('phonebook');

    let loadBtn = document.getElementById('btnLoad');
    let createBtn = document.getElementById('btnCreate');

    let person = document.getElementById('person');
    let phone = document.getElementById('phone');

    loadBtn.addEventListener('click', onLoad);
    createBtn.addEventListener('click', onCreate);

    async function onLoad() {
        ul.replaceChildren();
        let response = await fetch(url);
        let data = await response.json();

        Object.values(data).forEach(x => {
            let { person, phone, _id } = x;
            let li = createEl('li', `${person}: ${phone}`, ul);
            li.setAttribute('id', _id);

            let deleteBtn = createEl('button', 'Delete', li);
            deleteBtn.setAttribute('id', 'btnDelete');
            deleteBtn.addEventListener('click', onDelete);

        });
    }

    async function onDelete(event) {
        let id = event.target.parentNode.id;
        event.target.parentNode.remove();

        let deleteResponse = await fetch(`${url}/${id}`, {
            method: 'DELETE',
        });

    }

    async function onCreate() {

        if (person.value !== '' && phone.value !== '') {
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ person: person.value, phone: phone.value })
            });
            ul.replaceChildren();
            loadBtn.click();

            person.value = '';
            phone.value = '';
        }
    }
    function createEl(type, text, appender) {

        let result = document.createElement(type);
        result.textContent = text;
        appender.appendChild(result);

        return result;
    }
}

attachEvents();