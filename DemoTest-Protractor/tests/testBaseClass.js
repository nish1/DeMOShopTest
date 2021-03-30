'use strict';
const loginPage = require('../classes/pages/loginPage.js');
const loginpage = new loginPage();
const searchPage = require('../classes/pages/searchPage.js');
const searchpage = new searchPage();
const shoppingcartPage = require('../classes/pages/shoppingcartPage.js');
const shoppingcartpage = new shoppingcartPage();
const checkoutPage = require('../classes/pages/checkoutPage.js');
const checkoutpage = new checkoutPage();

class testBaseClass {
    constructor() {
        this.loginpage = loginpage;
        this.searchPage = searchpage;
        this.shoppingcartPage = shoppingcartpage;
        this.checkoutPage = checkoutpage;

    }
}

module.exports = testBaseClass;
