const puppeteer = require("puppeteer");

puppeteer.launch({ headless: false }).then(async browser => {
  var page = await browser.newPage();
  await page.goto("https://juejin.im");

  var login = await page.$(".login");
  await login.click();
  var loginPhoneOrEmail = await page.$("[name=loginPhoneOrEmail]");
  await loginPhoneOrEmail.click();
  await page.type("18516697699@163.com", { delay: 20 });
});
