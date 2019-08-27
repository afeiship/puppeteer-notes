const puppeteer = require('puppeteer');
const options1 = {
  path: './dist/example.png',
  type: 'png',
  omitBackground: false
};

puppeteer.launch({ headless: true }).then(async (browser) => {
  const page = await browser.newPage();
  const url = 'http://localhost:3000/echart.html';
  await page.setJavaScriptEnabled(true);
  await page.goto(url, { waitUntil: 'networkidle2' });
  const el = await page.$('#container');
  await el.screenshot({
    path: './dist/example-100.jpg',
    type: 'jpeg',
    quality: 100
  });
  await browser.close();
});
