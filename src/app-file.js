const puppeteer = require('puppeteer');

puppeteer.launch({ headless: true }).then(async (browser) => {
  // 测试过，时间相差并不大
  const page = await browser.newPage();
  const url = `file://${__dirname}/echart.html`;
  await page.setJavaScriptEnabled(true);
  await page.goto(url, { waitUntil: 'networkidle0' });
  const el = await page.$('.container');
  await el.screenshot({ path: './dist/example.jpg' });
  await browser.close();
});
