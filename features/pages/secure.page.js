import BasePage from './base.page';
class SecurePage extends BasePage {
    get secureAreaElement() { return $('div[class="example"] h2') }
    get messageElement() { return $('#flash') }
}
export default new SecurePage();