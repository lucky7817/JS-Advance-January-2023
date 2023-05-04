import { html, nothing} from '../../node_modules/lit-html/lit-html.js';
import { searchFruit } from '../api/data.js';


const searchTemplate = (isClicked, handler, fruits, hasUser) => html`
<section id="search">
<div class="form">
  <h2>Search</h2>
  <form class="search-form">
    <input type="text" name="search" id="search-input"/>
    <button @click=${handler} class="button-list">Search</button>
  </form>
</div>
<h4>Results:</h4>
  <div class="search-result">
  ${isClicked ? createResultTemplate(fruits, hasUser) : nothing}
  </div>
</section>
`;

const createResultTemplate = (fruits, hasUser) => {
    return html`
    ${fruits.length > 0 ?
        html`${fruits.map(fruit => createFruit(fruit, hasUser))}` :
        html`<p class="no-result">No result.</p>`
        }`
} 

const createFruit = (fruit, hasUser) => html`
<div class="fruit">
  <img src=${fruit.imageUrl} alt="example1" />
  <h3 class="title">${fruit.name}</h3>
  <p class="description">${fruit.description}</p>

  ${hasUser ?
            html`
        <a class="details-btn" href="">More Info</a>
        ` : nothing
        }
</div>
`;


export async function showSearch(ctx) {
    ctx.render(searchTemplate(false, onSearch));

    async function onSearch(e) {
        e.preventDefault()
        const searchInput = document.getElementById('search-input');
        const query = searchInput.value;

        if (!query) {
            return alert('Enter text');
        }

        const fruits = await searchFruit(query);
        ctx.render(searchTemplate(true, onSearch, fruits, !!ctx.user));
    }
}