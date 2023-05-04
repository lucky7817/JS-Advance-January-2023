import { getUserData } from "./util.js";
import page from '../node_modules/page/page.mjs';
import { updateNav } from "./views/nav.js";
import { render } from '../node_modules/lit-html/lit-html.js';
import { showLogin } from "./views/loginView.js";
import { showRegister } from "./views/registerView.js";
import { showHome } from "./views/homeView.js";
import { showCreate } from "./views/createView.js";
import { showCatalog } from "./views/catalogView.js";
import { showDetails } from "./views/detailsView.js";
import { showEdit } from "./views/editView.js";
import { showSearch } from "./views/searchView.js";


const main = document.getElementById('main-content');

//attached middle ware
page(decorateContext);

//create page routing
page('/', showHome);
page('/home', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/catalog', showCatalog);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);
page('/search', showSearch);


updateNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    const user = getUserData();
    if(user) {
        ctx.user = user;
    }

    next();
}

function renderMain(content) {
    render(content, main);
}