const { Builder, By, Key, until } = require("selenium-webdriver");

async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://172.19.218.89:5000/");
    driver.findElement(By.xpath('//*[@id="login-tab"]/a')).click();

    await driver.wait(until.elementLocated(By.id("email")), 5000);
    await driver.findElement(By.id('email')).sendKeys('test1@gmail.com');
    await driver.findElement(By.id('password')).sendKeys('1');
    // await new Promise(resolve => setTimeout(resolve, 5000));
    await driver.findElement(By.xpath('//*[@id="container-form"]/form/button')).click();

    await driver.wait(until.elementLocated(By.id("login-homepage")), 5000);
    await driver.findElement(By.xpath('//*[@id="navbarSupportedContent"]/ul/li[1]/a')).click();

    await driver.wait(until.elementLocated(By.css("body a:nth-child(1)")), 10000);
    await driver.findElement(By.xpath('/html/body/a[1]')).click();

    await driver.wait(until.elementLocated(By.id("vendorName")), 5000);
    await driver.findElement(By.id('vendorName')).sendKeys('Tacos el Selenium');
    await driver.findElement(By.id('address')).sendKeys('559 Odyssey Ln');
    await driver.findElement(By.id('hours')).sendKeys('10 AM to 5PM');
    await driver.findElement(By.id('zipcode')).sendKeys(95035);
    await driver.findElement(By.id('city')).sendKeys('CA');
    await driver.findElement(By.id('state')).sendKeys('Milpitas');
    await driver.findElement(By.id('taco_truck')).click();
    // find the image input field and send the path of the image file to upload
    await driver.wait(until.elementLocated(By.id("image")), 5000);
    const imageInput = await driver.findElement(By.id('image'));
    await imageInput.sendKeys("D:/Eric/Downloads/pexels-hunter-curtis-11117985.jpg");
    // submit the form
    await driver.findElement(By.xpath('//*[@id="containter-form"]/button')).click();
    //wait until they found the message "account created"
    await driver.wait(until.elementLocated(By.id("message")), 5000);
    let currentUrl = await driver.getCurrentUrl();
    console.log(currentUrl);
    // test case
    if (currentUrl === 'http://172.19.218.89:5000/vendorpage') {
    console.log('Create vendor Account Test: Passed');
    } else {
    console.log('Create vendor Account Logout Test: Failed');
    }
    
}
example()