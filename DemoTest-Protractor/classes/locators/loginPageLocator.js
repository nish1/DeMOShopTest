class loginPageLocator {
    constructor() {
        this.loginTitle = 'Your Store';
        this.postLoginTitle = 'My Account';
        this.logoutTitle = 'Account Logout';

        this.myAccount = element(by.cssContainingText('.hidden-xs.hidden-sm.hidden-md', 'My Account'));
        this.login = element(by.xpath('//a[contains(text(), "Login")]'));
        this.emailField = element(by.xpath('//input[@name="email"]'));
        this.passwordField = element(by.xpath('//input[@name="password"]'));
        this.loginButton = element(by.xpath('//input[@value="Login"]'));
        this. searchFiled = element.all(by.xpath('//input[@name="search"]')).get(0);
        this.logout = element(by.xpath('//a[contains(text(), "Logout")]'));
        this.logoutText = element(by.xpath('//h1[contains(text(), "Account Logout")]'));
    }
}

module.exports = loginPageLocator;