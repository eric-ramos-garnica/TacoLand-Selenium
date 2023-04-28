const { Builder, By, Key, until } = require("selenium-webdriver");

async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://172.19.218.89:5000/ ");
  // let title = await driver.getTitle();
  // console.log(title);

  await driver.findElement(By.xpath('//*[@id="login-tab"]/a')).click();

  // add a wait before locating the element
  await driver.wait(until.elementLocated(By.id("email")), 5000);

  driver.findElement(By.id("email")).sendKeys("test1@gmail.com");
  driver.findElement(By.id("password")).sendKeys('1');
  driver.findElement(By.xpath('//*[@id="container-form"]/form/button')).click();


  setTimeout(async function () {
    await driver.quit();
  }, 5000);
  // Test the login
  await driver.wait(until.elementLocated(By.id("login-homepage")), 5000);
  
  let currentUrl = await driver.getCurrentUrl();

  if (currentUrl === 'http://172.19.218.89:5000/') {
  console.log('Login Test: Passed');
  } else {
  console.log('Login Test: Failed');
  }
  

}

example();