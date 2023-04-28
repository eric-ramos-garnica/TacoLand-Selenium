const { Builder, By, Key, until } = require("selenium-webdriver");

async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://172.19.218.89:5000/");
    driver.findElement(By.xpath('//*[@id="login-tab"]/a')).click();
    await driver.wait(until.elementLocated(By.id("email")), 5000);
    driver.findElement(By.id('email')).sendKeys('test1@gmail.com');
    driver.findElement(By.id('password')).sendKeys('1');
    // wait for 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));
    driver.findElement(By.xpath('//*[@id="container-form"]/form/button')).click()//button
    await driver.wait(until.elementLocated(By.xpath('//*[@id="navbarSupportedContent"]/ul/li[4]/a')), 5000);
    driver.findElement(By.xpath('//*[@id="navbarSupportedContent"]/ul/li[4]/a')).click();//navbar
    // wait for 5 seconds
    await new Promise(resolve => setTimeout(resolve, 5000));
    driver.findElement(By.id('logout-tab')).click();
    // Test the login
    await driver.wait(until.elementLocated(By.xpath('/html/body/h1')), 5000);
  
    
    let currentUrl = await driver.getCurrentUrl();

    if (currentUrl === 'http://172.19.218.89:5000/') {
    console.log('Logout Test: Passed');
    } else {
    console.log('Logout Test: Failed');
    }

    setTimeout(async function () {
    await driver.quit();
    }, 5000);
}
example()