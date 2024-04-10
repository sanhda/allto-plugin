
export function renderFooter() {
    let footerHtml = `<div class="left-footer">
                        <img class="allplantools-logo" src="./images/icons/allto-logo.png" alt="">
                    </div>
                    <div class="mid-footer">
                        <ul class="social-media">
                            <li><a href=""><i class="fa fa-youtube"></i></a></li>
                            <li><a href=""><i class="fa fa-linkedin"></i></a></li>
                            <li><a href=""><i class="fa fa-twitter"></i></a></li>
                            <li><a href=""><i class="fa fa-facebook"></i></a></li>
                            <li><a href=""><i class="fa fa-telegram"></i></a></li>
                        </ul>
                    </div>
                    <div class="right-footer">
                        <h3>Partner Solution:</h3>
                        <img class="allplan-logo" src="./images/icons/allplan-logo.png" alt="">
                    </div>`
    document.querySelector('.footer-container').innerHTML = footerHtml
}