import { Given, When, Then } from '@cucumber/cucumber';
import loginPage from '../pages/login.page';
import securePage from '../pages/secure.page';
// const LoginPage = require('../pages/login.page');
// const SecurePage = require('../pages/secure.page');

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

Given('the user is on login page', async function () {
    // await delay(5000);
    //await browser.url("https://the-internet.herokuapp.com/login");
    await loginPage.open()
    await expect(browser).toHaveTitle('The Internet');
});

When('the user enters username as {string} and password as {string}', async function (username, password) {
    // await $('#username').setValue(username);
    // await $('#password').setValue(password)
    await loginPage.userNameTextBox.setValue(username);
    await loginPage.passwordTextBox.setValue(password);
});

When('clicks on login button', async function () {
    loginPage.submit()
});

Then('the user must navigate to secure area page displaying a message {string}', async function (successMessage) {
    await expect(securePage.secureAreaElement).toExist();
    await expect(securePage.secureAreaElement).toHaveTextContaining('Secure Area');

    await expect(securePage.messageElement).toExist();
    await expect(securePage.messageElement).toHaveTextContaining(successMessage);
});

Then('the user must remain on login page displaying a message {string}', async function (errorMessage) {
    await expect(loginPage.loginPageElement).toExist();
    await expect(loginPage.loginPageElement).toHaveTextContaining('Login Page');
    await expect(loginPage.messageElement).toExist();
    await expect(loginPage.messageElement).toHaveTextContaining(errorMessage);
});




