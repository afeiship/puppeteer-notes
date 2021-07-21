# use mac zip
- https://npm.taobao.org/mirrors/chromium-browser-snapshots/Mac/884014/chrome-mac.zip
- https://npm.taobao.org/mirrors/chromium-browser-snapshots/


```shell
# 这样安装，就不需要安装那个大文件
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm i puppeteer -D

# 可以配置这个环境变量
PUPPETEER_EXEC_PATH=/Users/aric.zheng/github/chrome-mac
```

## usage
```js
puppeteer.launch({
  executablePath: process.env.PUPPETEER_EXEC_PATH,
  // ...
});
```
