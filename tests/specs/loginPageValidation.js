/**
 * Created by Pranesha Mardhala on 03/24/19.
 */

let LoginPage = require('../../pages/login.page');
let helper = require('../../utils/helper');

let assert = require('assert');

describe('Login page fields validation', () =>  {
	let loginPageTitleExpected = 'Portal - hydroquebec';
    let emailToSpecify = "MsTest@gmail.com";
    let passToSpecify = "Ms Test";
	let expectedError = "The user or password is incorrect.";
	let loginPage;
	
	beforeEach(() => {
		loginPage = new LoginPage();
        loginPage.open();
		
		assert.strictEqual(loginPage.getTitle(), loginPageTitleExpected, 'The login page title is other than expected title' );
		
		// Wait until login page is loaded
		helper.waitForElementVisible('#username', 5000);
	});

    it('Login Page - User id is manadatory field',  () => {

		loginPage.loginWithCredentials('', passToSpecify);
		helper.waitForElementVisible('div[ng-show="error"] > span', 5000);
		
		// Verify with error message
        let actualError = loginPage.getErrorMessage();
		assert.strictEqual(actualError, expectedError, 'When userid is not provided to login, the Expected error message is \'The user or password is incorrect\' but was NOT.');

    });
	
	it('Login Page - Password is manadatory field',  () => {
		
		loginPage.loginWithCredentials(emailToSpecify, '');
		helper.waitForElementVisible('div[ng-show="error"] > span', 5000);
		
		// Verify with error message
        let actualError = loginPage.getErrorMessage();
		assert.strictEqual(actualError, expectedError, 'When password is not provided to login, the Expected error message is \'The user or password is incorrect\' but was NOT.');

    });
	
	it('Login Page - Can not login with invalid credentials',  () => {
		
		loginPage.loginWithCredentials(emailToSpecify, passToSpecify);
		helper.waitForElementVisible('div[ng-show="error"] > span', 5000);
		
		// Verify with error message
        let actualError = loginPage.getErrorMessage();
		assert.strictEqual(actualError, expectedError, 'When invalid credentials used to login, the Expected error message is \'The user or password is incorrect\' but was NOT.');

    });


});