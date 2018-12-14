var {defineSupportCode} = require('cucumber');
const { expect } = require('chai');
const data = require('testData');
const loginPage = require('loginPage');

defineSupportCode (function({Given, When, Then}){
    Given ('Launch opencart url', function(callback){
        this.driver.get(data.url);
        callback();
    });
    Then ('Verify title', function(callback){
        this.driver.getTitle().then(function(title){
            expect(title).to.eql(data.pageHeader);
    })
    });
    Given ('Enter invalid values in username and password', function(callback){
        loginPage.emailInputBox.sendKeys(data.email);
        loginPage.passwordInputBox.sendKeys(data.pass);
    });
    when ('Click on Login button', function(callback){
        loginPage.loginBtn.click();
    });
    Then ('Verify the error message', function(callback){
        loginPage.errorMsg.getText().then(function(text){
            expect(title).to.eql(data.error);
        });

    });
});
