'use strict';

const testBaseClass = require('../tests/testBaseClass.js');
const testBase = new testBaseClass();

describe('Testing - demoshop24', function() {

    beforeEach(function () {
        browser.ignoreSynchronization = true;
    });

    afterEach(function () {
        browser.ignoreSynchronization = false;
    });

    it('should open the Login Page', function() {
	    testBase.loginpage.openPage();
    });

    it('should login to the Portal', function() {
        testBase.loginpage.loginPortal();
    });

    it('should search the Portal for mac and Add the item to cart', function() {
        var searchText = browser.params.searchBy.os;
        testBase.searchPage.searchPortal(searchText);
        testBase.searchPage.addToCart();
    });

    it('should navigate to shopping cart and click checkout ', function() {
        testBase.shoppingcartPage.openShoppingCart();
        testBase.shoppingcartPage.checkout();
    });

    it('should fill in the checkout details and place order', function(){
        testBase.checkoutPage.checkoutDetails();
    });

    it('should logout from the Portal', function() {
        testBase.loginpage.logoutPortal();
    });

});
