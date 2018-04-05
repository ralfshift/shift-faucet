module.exports = {
    walletInputField: function() {
        return element(by.model('address'));
    },
    submitButton: function() {
        return element(by.class('button'));
    },
    webClientLink: function() {
        return element(by.class('button'));
    },
    faucetAddressLink: function() {
        return element(by.model('first'));
    },
    captchaIFrame: function() {
        return element(by.model('captcha'));
    },
    captchaCheckbox: function() {   // pass browser object if not working
        return element(by.model('captcha'));
        // by.tagName
        // by.xpath
        // by.class -> recaptcha-checkbox-checkmark
        browser.switchTo().frame('webPadIframe');
        return browser.findElement(by.class('recaptcha-checkbox-checkmark'));
    },
    infoBox: function() {
        // class = error fx-fade-down ng-animate
    },
    errorBox: function() {
        // class = error fx-fade-down ng-animate
    }
}