const pageObject = require('../helpers/pageObject.js');

describe('Faucet app', function() {
	it('shouldn\'t be able to send LSK without positive CAPTCHA validation', function() {
	  browser.get('http://localhost:3000/');
		// element(by.id('gobutton')).click();
		
		pageObject.faucetAddressLink.sendKeys('1223456L');
		pageObject.captchaCheckbox.click();
		pageObject.submitButton.click();

		// Everything OK
		expect(pageObject.statusMessage.getText())
			.toContain(' LSK sent, Transaction ID:'); // 1 LSK sent, Transaction ID: 3456953736862914951

		// Fail
		
	});
});