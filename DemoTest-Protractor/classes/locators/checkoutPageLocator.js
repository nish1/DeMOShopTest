class checkoutPageLocator {
    constructor() {
        this.oderPlacedTitle = 'Your order has been placed!';
        
        this.billingOption = element(by.xpath('//input[@value="new"]'));
        this.firstName = element(by.xpath('//input[@name="firstname"]'));
        this.lastName = element(by.xpath('//input[@name="lastname"]'));
        this.address = element(by.xpath('//input[@name="address_1"]'));
        this.city = element(by.xpath('//input[@name="city"]'));
        this.postalCode = element(by.xpath('//input[@name="postcode"]'));
        this.country = element(by.xpath('//select[@name="country_id"]/option[107]'));
        this.region = element(by.xpath('//select[@name="zone_id"]/option[16]'));
        this.continueButton = element(by.xpath('//input[@value="Continue"]'));

        this.deliveryOption = element.all(by.xpath('//*[@id="collapse-shipping-address"]/div/form/div[3]/label/input'));
        this.ddFirstName = element(by.xpath(' //input[@id="input-shipping-firstname"]'));        
        this.ddlastName = element(by.xpath('//input[@id="input-shipping-lastname"]'));
        this.ddaddress = element(by.xpath('//input[@id="input-shipping-address-1"]'));
        this.ddcity = element(by.xpath('//input[@id="input-shipping-city"]'));
        this.ddpostalCode = element(by.xpath('//input[@id="input-shipping-postcode"]'));
        this.ddcountry = element(by.xpath('//select[@id="input-shipping-country"]/option[107]'));
        this.ddregion = element(by.xpath('//select[@id="input-shipping-zone"]/option[16]'));
        this.ddcontinueButton = element(by.xpath('//input[@id="button-shipping-address"]'));

        this.dmcontinueButton = element(by.xpath('//input[@id="button-shipping-method"]'));

        this.tc = element(by.xpath('//input[@name="agree"]'));
        this.paycontinueButton = element(by.xpath('//input[@id="button-payment-method"]'));

        this.confirmOderButton = element(by.xpath('//input[@value="Confirm Order"]'));
    }
}

module.exports = checkoutPageLocator;