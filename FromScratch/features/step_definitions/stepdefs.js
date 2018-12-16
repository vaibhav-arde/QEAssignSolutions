const assert = require('assert');
const { Given, When, Then } = require('cucumber');

Given('I open url of opencart', function () {
  var windowHandle = browser.windowHandle();
  browser.windowHandleMaximize('{'+windowHandle.value+'}');
  browser.url('/');
  console.log('I open url of opencart');
});

When('I click on Login', function () {
  browser.click('a.dropdown-toggle span.hidden-xs');
  browser.click('=Login');
  console.log('I click on Login');
});

When('I enter username and password and clink to Login', function () {
  browser.setValue('input#input-email', 'test@gmail.com');
  browser.setValue('input#input-password', 'testpass');
  browser.click('input[type="submit"]');
  console.log('I enter username and password and clink to Login');
});

Then('Error msg to be displayed', function () {
  let text = browser.getText('div.alert');
  console.log(text);
  expect(text).to.equal('Warning: No match for E-Mail Address and/or Password.');
  console.log('Error msg to be displayed');
});
