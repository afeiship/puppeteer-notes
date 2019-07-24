const puppeteer = require("puppeteer");

puppeteer.launch({ headless: false }).then(async browser => {
  var page = await browser.newPage();
  await page.setJavaScriptEnabled(true);
  await page.goto("https://free-ss.site/");
  await page.waitFor(5000);
  const node = await page.evaluate(async () => {
    return document.querySelector("#tbss").innerHTML;
  });
  console.log(node);
});
