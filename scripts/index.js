import { renderHeader } from "./render/render-header.js";
import { renderCategories } from "./render/render-categories.js";
import { renderProducts } from "./render/render-products.js";
import { renderFooter } from "./render/render-footer.js";


function renderAllContents() {
    renderHeader();
    renderCategories();
    renderProducts();
    renderFooter();
}

renderAllContents();