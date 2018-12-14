var {setWorldConstructor} = require('cucumber');
var seleniumWebdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .build();

  // Returns a promise that resolves to the element
  this.waitForElement = function(locator) {
    var condition = seleniumWebdriver.until.elementLocated(locator);
    return this.driver.wait(condition)
  }
}

setWorldConstructor(CustomWorld)