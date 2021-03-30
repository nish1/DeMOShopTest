'use strict';
const searchPageLocator = require('../locators/searchPageLocator.js');

class searchPage {
    constructor() {
        this.locator = new searchPageLocator();
        this.EC = protractor.ExpectedConditions;
        this.timeOut = 30000;      
    }

    searchPortal(searchtext) {
        this.locator.searchField.clear();
        this.locator.searchField.sendKeys(searchtext);
        this.locator.serachIcon.click()
        expect(browser.getTitle()).toEqual(this.locator.searchTitle);
    }

    addToCart(){
        browser.executeScript('arguments[0].scrollIntoView(true)', this.locator.addtoCart.getWebElement());
        browser.wait(this.EC.visibilityOf(this.locator.addtoCart), this.timeOut, 'search item not visible');
        this.locator.addtoCart.click();
        browser.wait(this.EC.visibilityOf(this.locator.sucsessMsg), this.timeOut, 'item not added successfully');
    }
    

}

module.exports = searchPage;
