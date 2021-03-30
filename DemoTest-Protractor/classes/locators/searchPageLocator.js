class searchPageLocator {
    constructor() {
        this.searchTitle = 'Search - mac';

        this.searchField = element.all(by.xpath('//input[@name="search"]')).get(0);
        this.serachIcon = element(by.xpath('//button[@class="btn btn-default btn-lg"]'));
        this.addtoCart = element.all(by.xpath('//span[contains(text(), "Add to Cart")]')).get(0);
        this.sucsessMsg = element(by.xpath('//div[@class="alert alert-success alert-dismissible"]'));
    }
}

module.exports = searchPageLocator;