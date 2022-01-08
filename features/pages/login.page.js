class LoginPage {
    get userNameTextBox() { return browser.element('#username'); }
    get passwordTextBox() { return browser.element('#password'); }
    get loginButton() { return browser.element('button[type="submit"]'); }

    get loginPageElement() { return browser.element('div[class="example"] h2'); }
    get messageElement() { return browser.element('#flash'); }

}

export default new LoginPage();
