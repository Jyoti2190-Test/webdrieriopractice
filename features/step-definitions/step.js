import { Given, When, Then } from '@cucumber/cucumber';
const LoginPage = require('../pages/login.page');
const SecurePage = require('../pages/secure.page');

Given('the user is on login page', function () {
    setTimeout(async () => {
    browser.url("https://the-internet.herokuapp.com/login");
    expect(browser).toHaveTitle('The Internet');
    },5000 )
});

When('the user enters username as {string} and password as {string}',  function (username, password)     
{
    setTimeout(async () => {
    await browser.pause(6000);
    await LoginPage.userNameTextBox.setValue(username);
    await LoginPage.passwordTextBox.setValue(password);
    }, 5000)
    
});

When('clicks on login button', function () {
    LoginPage.loginButton.click();
});

Then('the user must navigate to secure area page displaying a message {string}', function (successMessage) {
    expect(SecurePage.secureAreaElement).toExist();
    expect(SecurePage.secureAreaElement).toHaveTextContaining('Secure Area');

    expect(SecurePage.messageElement).toExist();
    expect(SecurePage.messageElement).toHaveTextContaining(successMessage);
});

Then('the user must remain on login page displaying a message {string}', function (string) {
    expect(LoginPage.loginPageElement).toExist();
    expect(LoginPage.loginPageElement).toHaveTextContaining('Login Page');
    expect(LoginPage.messageElement).toExist();
    expect(LoginPage.messageElement).toHaveTextContaining(errorMessage);
});




