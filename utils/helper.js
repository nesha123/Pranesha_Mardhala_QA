/**
* Created by Pranesha Mardhala on 03/24/19.
 */

const waitForElementPresence = function (selector, /*optional*/ timeout) {
    let timeoutForWait = 3000;

    if(timeout !== undefined && Number.isNaN(timeout) === true) {
        timeoutForWait = timeout;
    }

    browser.waitForExist(selector, timeoutForWait);
};

const waitForElementVisible = function (selector, /*optional*/ timeout) {
    let timeoutForWait = 3000;

    if(timeout !== undefined && Number.isNaN(timeout) === true) {
        timeoutForWait = timeout;
    }

    browser.waitForVisible(selector, timeoutForWait);
};

const waitForElementEnable = function (selector, /*optional*/ timeout) {
    let timeoutForWait = 3000;

    if(timeout !== undefined && Number.isNaN(timeout) === true) {
        timeoutForWait = timeout;
    }

    browser.waitForEnabled(selector, timeoutForWait);
};

exports.waitForElementPresence = waitForElementPresence;
exports.waitForElementVisible = waitForElementVisible;
exports.waitForElementEnable = waitForElementEnable;