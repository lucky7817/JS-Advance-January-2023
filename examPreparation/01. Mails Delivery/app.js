function solve() {

    let nameInput = document.getElementById('recipientName');
    let titleInput = document.getElementById('title');
    let messageInput = document.getElementById('message');
    let deleted = document.querySelector('.delete-list');
    let sent = document.querySelector('.sent-list');
    let list = document.getElementById('list');

    //let listOfEmails = document.getElementById('list');

    document.getElementById('add').addEventListener('click', createMail);
    document.getElementById('reset').addEventListener('click', onReset);

    function createMail(event) {
        event.preventDefault();

        let name = nameInput.value;
        let title = titleInput.value;
        let message = messageInput.value;

        if (name === '' || title === '' || message === '') {
            return;
        }

        let element = document.createElement('li');
        element.innerHTML = `
        <h4>Title: ${title}</h4>
        <h4>Recipient Name: ${name}</h4>
        <span>${message}</span>
        <div id="list-action">
        <button type="submit" id="send">Send</button>
        <button type="submit" id="delete">Delete</button>
        </div>`;
        // let listOfEmails = document.getElementById('list');

        // let liElInList = document.createElement('li');
        // listOfEmails.appendChild(liElInList);


        // let takeliElement = document.querySelector('#list li');

        // let h4ElTitle = document.createElement('h4');
        // h4ElTitle.innerHTML = title.value;
        // takeliElement.appendChild(h4ElTitle);

        // let h4RecipientName = document.createElement('h4');
        // h4RecipientName.innerHTML = recipientName.value;
        // takeliElement.appendChild(h4RecipientName);

        // let spanMessage = document.createElement('span');
        // spanMessage.innerHTML = message.value;
        // takeliElement.appendChild(spanMessage);

        // let divElListAction = document.createElement('div');
        // divElListAction.id = 'list-action';
        // takeliElement.appendChild(divElListAction);

        // let takeElDivAction = document.getElementById('list-action');

        // let newButtonSend = document.createElement('button');
        // newButtonSend.id = 'send';
        // newButtonSend.type = 'submit';
        // newButtonSend.innerText = 'Send'
        // takeElDivAction.appendChild(newButtonSend);

        // let newButtonDelete = document.createElement('button');
        // newButtonDelete.id = 'delete';
        // newButtonDelete.type = 'submit';
        // newButtonDelete.innerText = 'Delete'
        // takeElDivAction.appendChild(newButtonDelete);

        element.querySelector('#send').addEventListener('click', sendEmail);
        element.querySelector('#delete').addEventListener('click', deleteMail);

        list.appendChild(element);

        function sendEmail() {
            let sendEmailEl = document.createElement('li');
            sendEmailEl.innerHTML = `
            <span>To: John@abv.bg</span>
            <span>Title: For Work</span>
            <div class="btn">
             <button type="submit" class="delete">Delete</button>
            </div>`;

            sendEmailEl.querySelector('.delete').addEventListener('click', () => {
                let deletedMail = document.createElement('li');
                deletedMail.innerHTML = `
            <span>To: ${name}</span>
            <span>Title: ${title}</span>`

                deleted.appendChild(deletedMail);
                sendEmailEl.remove();
            });

            sent.appendChild(sendEmailEl);
            element.remove();
        }

        function deleteMail() {
            let deletedMail = document.createElement('li');
            deletedMail.innerHTML = `
            <span>To: ${name}</span>
            <span>Title: ${title}</span>`

            deleted.appendChild(deletedMail);
            element.remove();
        }

        resetInput()
    }

    function resetInput() {
        nameInput.value = '';
        titleInput.value = '';
        messageInput.value = '';
    }

    function onReset(event) {
        event.preventDefault();
        resetInput();

    }

}
solve()