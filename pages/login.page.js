/**
 * Created by Pranesha Mardhala on 03/24/19.
 */


let Page = require('./page');
let helper = require('../utils/helper');

class LoginPage  extends (Page) {
	
	get email() {return $('#username');}
    get password() {return $('#password');}
    get signInButton() {return $('div.add-margin-top-normal.a_right[ng-switch="dual_auth"] > button');}
	get errorMessage() {return $('div[ng-show="error"] > span');}
	
    open() {
        let urlToNavigate = 'https://uat.ormuco.com/login';
        super.open(urlToNavigate);
    }

    getTitle() {
        return browser.getTitle();
    }

	setEmail(userId) {
		this.email.setValue(userid);
	}
	
	setPassword(pass) {
		this.password.setValue(pass);
	}
	
	getErrorMessage() {
		return this.errorMessage.getText();
	}

    loginWithCredentials(userid, pass) {
        this.email.setValue(userid);
		this.password.setValue(pass);
        this.signInButton.click();
    }

 }

module.exports = LoginPage;
