async function solution() {

    let main = document.getElementById('main');

    let url = 'http://localhost:3030/jsonstore/advanced/articles/list';
    let res = await fetch(url);
    let data = await res.json();

    data.forEach(a => {
        let divAccordion = createElement('div', '', ['class', 'accordion']);
        let divHead = createElement('div', '', ['class', 'head']);
        let span = createElement('span', a.title);
        let button = createElement('button', 'More', ['class', 'button', 'id', a._id]);
        let divExtra = createElement('div', '', ['class', 'extra']);
        let p = createElement('p');

        divHead.appendChild(span);
        divHead.appendChild(button);
        divAccordion.appendChild(divExtra);
        divExtra.appendChild(p);
        divAccordion.appendChild(divHead);
        main.appendChild(divAccordion);
        
        button.addEventListener('click', toggle);
    });

    async function toggle(event) {
        let accordion = event.target.parentNode.parentNode;
        let p = event.target.parentNode.parentNode.children[0].children[0];
        
        let extra = event.target.parentNode.parentNode.children[0];
        let id = event.target.id;
        let url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

        let response = await fetch(url);
        let data = await response.json();

        p.textContent = data.content;

        let hidden = event.target.textContent === 'More';
        extra.style.display = hidden ? 'block' : 'none';
        event.target.textContent = hidden ? 'Less' : 'More';

    }

    function createElement(type, content, attributes = []) {

        let element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }

        if (attributes.length > 0) {
            for (let i = 0; i < attributes.length; i += 2) {
                element.setAttribute(attributes[i], attributes[i + 1]);
            }
        }
        return element;
    }   
}

solution()