import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { getAllFruits } from '../api/data.js';

const fruitTemplate = (fruit, hasUser) => html`
<div class="fruit">
        <img src=${fruit.imageUrl} alt="example1" />
        <h3 class="title">${fruit.name}</h3>
        <p class="description">${fruit.description}</p>
    </div>
    ${hasUser ?
    html`<a class="details-btn" href="/details/${fruit._id}">More Info</a>`
     : nothing
    }
`

const dashboardTemplate = (fruits, hasUser) => html`
<section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${fruits.length > 0 ?
        fruits.map(fruit => fruitTemplate(fruit, hasUser)) :
        html`<h2>No fruit info yet.</h2>`
    }
</section>
`;

export async function showDashboard(ctx) {
    const allFriuts = await getAllFruits();
    ctx.render(dashboardTemplate(allFriuts, !!ctx.user));
}