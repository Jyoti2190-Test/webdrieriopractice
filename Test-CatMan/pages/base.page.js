export default class BasePage {
    constructor() {
        this.title = 'Category'
    }

    async open(path) {
        await browser.url(path)
    }
}