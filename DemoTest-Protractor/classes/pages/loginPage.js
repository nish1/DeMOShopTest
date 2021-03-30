'use strict';
const loginPageLocator = require('../locators/loginPageLocator.js');

class loginPage {
    constructor() {
        this.locator = new loginPageLocator();
        this.email = browser.params.login.email;
        this.passwd = browser.params.login.password;
        this.envUrl = browser.baseUrl;
        this.EC = protractor.ExpectedConditions;
        this.timeOut = 10000;
    }

    openPage() {
        //browser.ignoreSynchronization = true;
        browser.get(this.envUrl);
        expect(browser.getTitle()).toEqual(this.locator.loginTitle);
        this.locator.myAccount.click();
        this.locator.login.click();
    }

    loginPortal() {
        this.locator.emailField.clear();
        this.locator.emailField.sendKeys(this.email);
        this.locator.passwordField.clear();
        this.locator.passwordField.sendKeys(this.passwd);
        this.locator.loginButton.click()
        browser.wait(this.EC.visibilityOf(this.locator.searchFiled), this.timeOut, 'login not successfull');
        expect(browser.getTitle()).toEqual(this.locator.postLoginTitle);
    }

    logoutPortal() {
        this.locator.myAccount.click();
        this.locator.logout.click();
        browser.wait(this.EC.visibilityOf(this.locator.logoutText), this.timeOut, 'logout not successfull'); 
        expect(browser.getTitle()).toEqual(this.locator.logoutTitle);
    }

}

module.exports = loginPage;
