import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { deleteFruitById, getDetailsById } from '../api/data.js';



const detailsTemplate = (fruit, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${fruit.imageUrl} alt="example1" />
        <p id="details-title">${fruit.name}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p>${fruit.description}</p>
                <p id="nutrition">Nutrition</p>
                <p id="details-nutrition">${fruit.nutrition}</p>
            </div>
            <!--Edit and Delete are only for creator-->
            ${isOwner === true ?
            html`
            <div id="action-buttons">
                <a href="/edit/${fruit._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
            </div>
            ` : nothing
            }
        </div>
    </div>
</section>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const fruit = await getDetailsById(id);
    const isOwner = fruit._ownerId === ctx.user._id;
    ctx.render(detailsTemplate(fruit, isOwner, onDelete));

    async function onDelete() {
        const userConfirm = confirm('Are you sure?');
        if (!userConfirm) {
            return;
        }
        await deleteFruitById(id);
        ctx.page.redirect('/fruits')
    }
}