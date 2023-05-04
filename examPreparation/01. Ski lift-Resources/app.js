window.addEventListener('load', solve);

function solve() {

    let firstNameEl = document.getElementById('first-name');
    let lastNameEl = document.getElementById('last-name');
    let numOfPeopleEl = document.getElementById('people-count');
    let dateEl = document.getElementById('from-date');
    let daysEl = document.getElementById('days-count');
    let buttonNextStep = document.getElementById('next-btn');

    let infoTicketSection = document.getElementById('info-ticket');

    let liParentTicketInfoList = document.querySelector('.ticket-info-list');
    let confirmTicketSection = document.querySelector('.confirm-ticket')
    let divClassMain = document.getElementById('main');
    let body = document.querySelector('#body');



    buttonNextStep.addEventListener('click', (e) => {
        e.preventDefault();

        let firstName = firstNameEl.value;
        let lastName = lastNameEl.value;
        let numOfPeople = numOfPeopleEl.value;
        let date = dateEl.value;
        let days = daysEl.value;

        if (firstNameEl === '' || lastName === '' || numOfPeople === '' || date === '' || days === '') {
            return;
        }

        firstNameEl.value = '';
        lastNameEl.value = '';
        numOfPeopleEl.value = '';
        dateEl.value = '';
        daysEl.value = '';

        buttonNextStep.disabled = true;

        let li = document.createElement('li');
        li.classList.add('ticket');
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');

        let buttonEdit = document.createElement('button');
        buttonEdit.classList.add('edit-btn');
        buttonEdit.textContent = 'Edit';
        let buttonContinue = document.createElement('button');
        buttonContinue.classList.add('continue-btn');
        buttonContinue.textContent = 'Continue';

        h3.textContent = `Name: ${firstName}`;
        p1.textContent = `From date: ${date}`;
        p2.textContent = `For ${days} days`;
        p3.textContent = `For ${numOfPeople} people`;

        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);

        li.appendChild(article);
        li.appendChild(buttonEdit);
        li.appendChild(buttonContinue);

        liParentTicketInfoList.appendChild(li);

        buttonEdit.disabled = false;
        buttonContinue.disabled = false;

        buttonEdit.addEventListener('click', (e) => {

            firstNameEl.value = firstName;
            lastNameEl.value = lastName;
            numOfPeopleEl.value = numOfPeople;
            dateEl.value = date;
            daysEl.value = days;

            li.remove();

            buttonNextStep.disabled = false;
        });

        buttonContinue.addEventListener('click', (e) => {

            buttonEdit.remove();
            buttonContinue.remove();

            let liTake = document.querySelector('.ticket');
            confirmTicketSection.appendChild(liTake);

            let buttonConfirm = document.createElement('button');
            buttonConfirm.classList.add('confirm-btn');
            buttonConfirm.textContent = 'Confirm';
            let buttonCancel = document.createElement('button');
            buttonCancel.classList.add('cancel-btn');
            buttonCancel.textContent = 'Cancel';

            liTake.appendChild(buttonConfirm);
            liTake.appendChild(buttonCancel);

            buttonCancel.addEventListener('click', (e) => {

                liTake.remove();
                buttonNextStep.disabled = false;
            });

            buttonConfirm.addEventListener('click', () => {
                
                divClassMain.remove();

                let h1El = document.createElement('h1');
                h1El.setAttribute('id', 'thank you');
                h1El.textContent = 'Thank you, have a nice day!'

                let buttonBack = document.createElement('button');
                buttonBack.setAttribute('id', 'back');
                buttonBack.textContent = 'Back';

                let next = body.children[2];
                
                next.appendChild(h1El);
                next.append(buttonBack);
            });
        });
    });
}




