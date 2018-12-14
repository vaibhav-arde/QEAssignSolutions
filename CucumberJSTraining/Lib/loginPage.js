module.exports={
    var emailInputBox = driver.findElement({xpath: "//input[@id='input-email']"}),
    var passwordInputBox = driver.findElement({xpath: "//input[@id='input-password']"}),
    var loginBtn = driver.findElement({xpath: "//button[@type='submit']"}).click(),
    var errorMsg = driver.findElement({xpath: "//div[@class='alert alert-danger alert-dismissible']"})
}