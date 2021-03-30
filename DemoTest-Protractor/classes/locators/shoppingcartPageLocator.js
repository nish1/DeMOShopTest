class shoppingcartPageLocator {
    constructor() {
        this.shoppingCartTitle = 'Shopping Cart';
        this.checkoutTite ='Checkout';
        this.shoppingCart = element(by.cssContainingText('.hidden-xs.hidden-sm.hidden-md', 'Shopping Cart'));
        this.checkout = element(by.xpath('//a[contains(text(), "Checkout")]'));
    }
}

module.exports = shoppingcartPageLocator;