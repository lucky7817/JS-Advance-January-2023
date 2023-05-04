function attachEvents() {
    let inputName = document.querySelector('input[name=author]');
    let inputContent = document.querySelector('input[name=content');
    let textArea = document.getElementById('messages');

    let buttonSend = document.getElementById('submit');
    buttonSend.addEventListener('click', onSend);
    let buttonRefresh = document.getElementById('refresh');
    buttonRefresh.addEventListener('click', onRefresh);

    let url = 'http://localhost:3030/jsonstore/messenger';

    async function onSend() {

        if (inputName.value !== '' && inputContent.value !== '') {
            await request(url, { author: inputName.value, content: inputContent.value });
            inputName.value = '';
            inputContent.value = '';
            //alert('Fields are required!');
        }
    }

    async function onRefresh() {
        let res = await fetch(url);
        let data = await res.json();

        textArea.value = Object.values(data).map(({ author, content }) => `${author}: ${content}`).join('\n');
    }

    async function request(url, option) {

        if (option) {
            option = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(option),
            };
        }
        let response = await fetch(url, option);

        return response.json();
    }
}

attachEvents();