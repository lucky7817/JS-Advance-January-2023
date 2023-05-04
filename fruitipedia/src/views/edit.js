import { html } from '../../node_modules/lit-html/lit-html.js';
import { getDetailsById, updateFruit } from '../api/data.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (fruit, handler) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Fruit</h2>
        <form @submit=${handler} class="edit-form">
            <input type="text" name="name" id="name" placeholder="Fruit Name" value=${fruit.name} />
            <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image URL" value=${fruit.imageUrl} />
            <textarea id="fruit-description" name="description" placeholder="Description" rows="10"
                cols="50">${fruit.description}</textarea>
            <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50">${fruit.nutrition}</textarea>
            <button type="submit">post</button>
        </form>
    </div>
</section>
`;


export async function showEdit(ctx) {
    const id = ctx.params.id;
    const fruit = await getDetailsById(id);
    ctx.render(editTemplate(fruit, createSubmitHandler(onEdit)))

    async function onEdit(data) {
        const {
            name,
            imageUrl,
            description,
            nutrition
        } = data;

        if (!name || !imageUrl || !description || !nutrition) {
            return alert('All fields are required!');
        }

        await updateFruit(id, data);
        ctx.page.redirect(`/details/${id}`);

    }
}