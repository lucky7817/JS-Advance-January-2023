import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { getUserData } from './util.js';
import { homePage } from './veiws/home.js';
import { logout } from './api/auth.js';
import { loginPage } from './veiws/login.js';
import { registerPage } from './veiws/register.js';
import { createPage } from './veiws/create.js';
import { myBooksPage } from './veiws/myBooks.js';
import { searchPage } from './veiws/search.js';
import { detailsPage } from './veiws/details.js';

const root = document.getElementById('site-content');

function decorateContent(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav

    next();
}

export function updateUserNav() {
    let userData = getUserData();
    if(userData) {
        document.getElementById('user').style.display = 'inline-block'
        document.getElementById('guest').style.display = 'none'
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`
    } else {
        document.getElementById('guest').style.display = 'inline-block'
        document.getElementById('user').style.display = 'none'
    }
}

document.getElementById('logoutBtn').addEventListener('click', (e) => {
    logout();
    updateUserNav();
    page.redirect('/')
})

page(decorateContent);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/mybooks', myBooksPage);
page('/search', searchPage);
page('/details/:id', detailsPage);
updateUserNav();
page.start()
