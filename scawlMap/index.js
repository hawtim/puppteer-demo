const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({
      headless: false,
      executablePath:
      "C:/Users/hawtim/AppData/Local/Google/Chrome SxS/Application/chrome.exe"
    })
    const page = await browser.newPage();
    page.setViewport({
        width: 4800,
        height: 5400
    })
    page.setUserAgent('Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36')

    await page.goto('http://www.google.cn/maps/@11.8318134,123.603031,9.5z', {
      waitUntil: 'networkidle2'
    });
    await page.screenshot({
        path: './philippines.png'
    })
})()