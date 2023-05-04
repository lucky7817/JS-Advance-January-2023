import { html, render } from '../node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

let cardTemplate = (towns) => html`
<ul>
   ${towns.map(town => html`<li id=${town}>${town}</li>`)}
</ul>
`
let renderTownsComponent = (towns) => {
   cardTemplate(towns);
   let rootElement = document.getElementById('towns');
   render(cardTemplate(towns), rootElement);
}

renderTownsComponent(towns);

document.querySelector('BUTTON').addEventListener('click', search);

const searchTown = (towns, text) => {
   return towns.filter((town) => {
      if(town.includes(text)) {
         let match = document.getElementById(`${town}`);
         match.setAttribute('class', 'active');
         return town;
      }
   });
}

function search() {
   let text = document.getElementById('searchText').value;
   let result = searchTown(towns, text);
   let resultHtml = document.getElementById('result');
   resultHtml.textContent = `${result.length} matches found`;
}


//SECOND VARIANT 

// const searchTemplate = (towns, match) => html`
// <article>
//    <div id="towns">
//       <ul>
//           ${towns.map(t => itemTemplate(t, match))};
//       </ul>
//    </div>
//    <input type="text" id="searchText" />
//    <button @click=${search}>Search</button>
//    <div id="result">${countMatches(towns, match)}</div>
// </article>
// `

// const itemTemplate = (name, match) => html`
// <li class=${(match && name.toLowerCase().includes(match.toLowerCase())) ? 'active' : ''}>${name}</li>
// `

// let main = document.body;
// update();

// function update(match = '') {
//    let result = searchTemplate(towns, match);
//    render(result, main);
// }

// function search() {
//    let match = document.getElementById('searchText').value;
//    update(match);
// }

// function countMatches(towns, match) {
//    debugger
//    let matches = towns.filter(t => match && t.toLowerCase().includes(match.toLowerCase())).length;
//    console.log(main);
//    return `${matches} matches found`;
// }
