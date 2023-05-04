function solve() {
    // let firstName = document.getElementById('fname');
    // let lastName = document.getElementById('lname');
    // let email = document.getElementById('email');
    // let dayOfBirth = document.getElementById('birth');
    // let position = document.getElementById('position');
    // let salary = document.getElementById('salary');



    let buttonHireWorker = document.getElementById('add-worker');

    let tBody = document.getElementById('tbody');
    

    let allInputs = Array.from(document.querySelectorAll('form input'));

    // let buttonFired = document.createElement('button');
    // let buttonEdit = document.createElement('button');

    let sumAddSalary = document.getElementById('sum');



    //let buttonsTd = `<td><button class="fired">Fired</button> <button class="edit">Edit</button></td>`;

    //console.log(allInputs);


    buttonHireWorker.addEventListener('click', (event) => {
        event.preventDefault();
        let tr = document.createElement('tr');
        
        for (let i = 0; i < allInputs.length; i++) {

            if (allInputs[i].value === '') {
                return;
            }
            let td = document.createElement('td');
            td.textContent = allInputs[i].value;
            tr.appendChild(td);

            if (i === 5) {
                let currentSum = Number(sumAddSalary.textContent);
                sumAddSalary.textContent = currentSum + Number(allInputs[5].value);


            }
        }

        //let tdButtons = document.createElement('td');
        createButtons();
        
        tBody.appendChild(tr);

        for (const input of allInputs) {
            input.value = '';
        }
   
    });

    

    function createButtons() {
        let td = factoryElement('td', '', tr);
        let buttonFired = factoryElement('button', 'Fired', td);
        buttonFired.classList.add('fired');
        let buttonEdit = factoryElement('button', 'Edit', td);
        buttonEdit.classList.add('edit');
    }

    buttonEdit.addEventListener('click', (event) => {
        let trElements = Array.from(document.querySelectorAll('#tbody tr td'));
        let lastTdButtons = trElements.pop();

        for (let i = 0; i < allInputs.length; i++) {
            allInputs[i].value = trElements[i].textContent;

            if (i === 5) {
                let sumSalary = Number(sumAddSalary.textContent);
                sumAddSalary.textContent = Math.abs(Number(trElements[i].textContent) - sumSalary);
            }

            trElements[i].remove();
            lastTdButtons.remove();
        }
    });

    function factoryElement(type, textName, parent) {
        let element = document.createElement(type);
        element.classList.add(className);
        element.textContent = textName;

        if (parent) {
            parent.appendChild(element)
        }

        return button;
        // let buttonEdit = document.createElement(type);
        // buttonEdit.classList.add('edit');
        // buttonEdit.textContent = 'Edit';

        // tdButtons.appendChild(buttonFired);
        // tdButtons.appendChild(buttonEdit);
        

        // let buttonFired = document.createElement('button');
        // buttonFired.classList.add('fired');
        // buttonFired.textContent = 'Fired';
        // let buttonEdit = document.createElement('button');
        // buttonEdit.classList.add('edit');
        // buttonEdit.textContent = 'Edit';

        // tdButtons.appendChild(buttonFired);
        // tdButtons.appendChild(buttonEdit);
        // tr.appendChild(tdButtons);



    }


    


}
solve()