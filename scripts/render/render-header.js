export function renderHeader() {
    let headerHtml = `<div class="header">
            <a href="">
                <img class="allto-logo" src="./images/icons/allto-logo.png" alt="">
            </a>

            <div class="header-right">
                <a class="more-plugin" href="">MORE PLUGINS</a>
                <a class="login" href="">LOGIN</a>
            </div>
        </div>`
    document.querySelector('.header-container').innerHTML = headerHtml
}