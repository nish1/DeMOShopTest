'use strict';
const checkoutPageLocator = require('../locators/checkoutPageLocator.js');

class checkoutPage {
    constructor() {
        this.locator = new checkoutPageLocator();
        this.EC = protractor.ExpectedConditions;
        this.timeOut = 10000;
        this.firstname = browser.params.billingDetails.firstName;
        this.lastname = browser.params.billingDetails.lastName;
        this.addr = browser.params.billingDetails.address;
        this.cty = browser.params.billingDetails.city;
        this.pcode = browser.params.billingDetails.postalCode;
    }

    checkoutDetails(){
        browser.wait(this.EC.visibilityOf(this.locator.billingOption), this.timeOut, 'billing details not visible');
        this.locator.billingOption.click();
        browser.sleep('1000');
        this.locator.firstName.sendKeys(this.firstname);
        this.locator.lastName.sendKeys(this.lastname);
        this.locator.address.sendKeys(this.addr);
        this.locator.city.sendKeys(this.cty);
        this.locator.postalCode.sendKeys(this.pcode);
        this.locator.country.click();
        browser.sleep('1000');
        this.locator.region.click();
        browser.sleep('1000');
        this.locator.continueButton.click();
        browser.sleep('3000');

        //delivery details
        this.locator.deliveryOption.click();
        browser.sleep('1000');
        this.locator.ddFirstName.sendKeys(this.firstname);
        this.locator.ddlastName.sendKeys(this.lastname);
        this.locator.ddaddress.sendKeys(this.addr);
        this.locator.ddcity.sendKeys(this.cty);
        this.locator.ddpostalCode.sendKeys(this.pcode);
        this.locator.ddcountry.click();
        this.locator.ddregion.click();
        browser.sleep('1000');
        this.locator.ddcontinueButton.click();
        browser.sleep('3000');

        //Delivery Method
        this.locator.dmcontinueButton.click();
        browser.sleep('3000');

        //Payment 
        this.locator.tc.click();
        this.locator.paycontinueButton.click();
        browser.sleep('3000');
        
        this.locator.confirmOderButton.click();
        browser.sleep('3000');
        expect(browser.getTitle()).toEqual(this.locator.oderPlacedTitle);
    }
    
}

module.exports = checkoutPage;
