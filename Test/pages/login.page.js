import BasePage from "./base.page";

class LoginPage extends BasePage {
    get userNameTextBox() { return $('#username'); }
    get passwordTextBox() { return $('#password'); }
    get loginButton() { return $('form button[type="submit"]'); }

    get loginPageElement() { return $('div[class="example"] h2'); }
    get messageElement() { return $('#flash'); }

    async open() {
        await super.open("https://the-internet.herokuapp.com/login");
    }

    async submit() {
        await this.loginButton.click()
    }



}

export default new LoginPage();
