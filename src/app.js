const puppeteer = require("puppeteer");

puppeteer.launch({ headless: true }).then(async browser => {
  var page = await browser.newPage();
  await page.setJavaScriptEnabled(true);
  await page.goto("https://free-ss.site/", { waitUntil: "networkidle0" });
  const node = await page.evaluate(async () => {
    var els = document.querySelectorAll("#tbss [role='row']");
    els = [].slice.call(els);
    var result = [];

    els.forEach(el => {
      console.log(el.className);
      if (el.className) {
        result.push({
          vtum: el.querySelector("td:nth-child(1)").innerText,
          address: el.querySelector("td:nth-child(2)").innerText,
          port: el.querySelector("td:nth-child(3)").innerText,
          method: el.querySelector("td:nth-child(4)").innerText,
          password: el.querySelector("td:nth-child(5)").innerText
        });
      }
    });

    return result;
  });
  console.log(node);
});
