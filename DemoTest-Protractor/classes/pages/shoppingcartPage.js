'use strict';
const shoppingcartPageLocator = require('../locators/shoppingcartPageLocator.js');

class shoppingcartPage {
    constructor() {
        this.locator = new shoppingcartPageLocator();
        this.EC = protractor.ExpectedConditions;
        this.timeOut = 30000;      
    }

    openShoppingCart() {
        this.locator.shoppingCart.click();
        browser.sleep('1000');
        expect(browser.getTitle()).toEqual(this.locator.shoppingCartTitle);
    }

    checkout(){
        browser.executeScript('arguments[0].scrollIntoView(true)', this.locator.checkout.getWebElement());
        console.log('after scrolllinto view of checkout button');
        browser.wait(this.EC.visibilityOf(this.locator.checkout), this.timeOut, 'checkout option not visible');
        this.locator.checkout.click();
        browser.sleep('3000');
        //browser.wait(this.EC.visibilityOf(this.locator.checkoutTite), this.timeOut, 'checkout page not visible');
        expect(browser.getTitle()).toEqual(this.locator.checkoutTite);
        console.log('landed on checkout page')
    }
    

}

module.exports = shoppingcartPage;
