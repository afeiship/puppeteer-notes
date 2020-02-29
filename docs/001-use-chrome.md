# use chrome

```js
	const browser = await puppeteer.launch({
	  headless: false,
	  executablePath: '/usr/bin/google-chrome'
	});
```

## resources
- https://github.com/puppeteer/puppeteer/issues/3199
- https://github.com/puppeteer/puppeteer/issues/288
