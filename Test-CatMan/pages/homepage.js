import BasePage from "./base.page";

class HomePage extends BasePage {

    get createCategorytextBox() { return $('#__button1-content') };
    get NewCategoryElement() { return $('#__title2-inner') };
    get purchasingCategoriesElement() { return $('__title3-inner') };
    get categoryNameTextBox() { return $("(//input[@class='sapMInputBaseInner'])[1]") };
    get parentcategoryTextBox() { return $("//input[@class='sapMInputBaseInner sapMComboBoxInner']") }
    get saveButton() { return $("//button[@class='sapMBtnBase sapMBtn sapMBtnInverted sapMBarChild']") };
    get CategorySavedSuccessMesage() { return $("//span[@class='sapMText sapUiSelectable sapMTextMaxWidth']")};
    get searchTextBox() { return $('#__xmlview0--categorySearchField-I')}
    get searchClik() {return $("//div[@class='sapMSFS sapMSFB']")}
    get SearchResults() { return $("//span[@id='__label1-__clone0-text']/bdi")};
    get closeNewCategoryWindow() {return $("//button[@title='Close middle column']") }


    async open() {
        await super.open("https://catman-prov-dev.catman-dev-catman-eu10-dev-catman-approuter.cfapps.eu10.hana.ondemand.com/cp.portal/site#Taxonomy-Display?sap-ui-app-id-hint=catman.taxonomy.ui");
    }
}

export default new HomePage();