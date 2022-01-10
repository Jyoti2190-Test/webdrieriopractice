export default class BasePage {
    constructor() {
        this.title = 'My Page'
    }

    async open(path) {
        await browser.url(path)
    }
}