import { html } from "lit-html";
import { getMyBooks } from "../api/data";
import { getUserData } from "../util";
import { bookPreview } from "./common.js";

const myBooksTemplate = (books) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    ${books.length === 0 ?
        html`<p class="no-books">No books in database!</p>` : 
        html`<ul class="my-books-list">
            ${books.map(bookPreview)}
        </ul>`}    
</section>`;

export async function myBooksPage(ctx) {
    const userData = getUserData();
    const books = await getMyBooks(userData.id);
    ctx.render(myBooksTemplate(books));
}