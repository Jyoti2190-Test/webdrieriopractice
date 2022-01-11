import { Given, When, Then } from '@cucumber/cucumber';
import HomePage from '../pages/homepage';

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

Given('user is on homepage', async function () {

    await HomePage.open()
    await browser.maximizeWindow();
    await delay(5000)
    await expect(browser).toHaveTitle('Category')

});

When('Create Category is available', async function () {

    await expect(HomePage.createCategorytextBox).toExist();

});

Then('Click on Create Category', async function () {

    await HomePage.createCategorytextBox.click();


})

Then('New Category Tab should be available', async function () {

    //await delay(5000);
    await expect(HomePage.NewCategoryElement).toExist();

})

Then('Enter the {string} , {string}', async function (categoryname, parentcategory) {

    //await delay(5000);
    //await HomePage.expand.click();
    await expect(HomePage.categoryNameTextBox).toExist();
    await HomePage.categoryNameTextBox.setValue(categoryname);
    await HomePage.parentcategoryTextBox.setValue(parentcategory);
    await HomePage.saveButton.click();
    await expect(HomePage.CategorySavedSuccessMesage).toHaveText("Category saved");
    await HomePage.closeNewCategoryWindow.click();
})

Then('Input the details for search name {string} and click Search', async function (categoryname) {
    await expect(HomePage.searchTextBox).toExist();
    await HomePage.searchTextBox.setValue(categoryname);
    await HomePage.searchClik.click();
    await expect(HomePage.SearchResults).toHaveText(categoryname);




})
