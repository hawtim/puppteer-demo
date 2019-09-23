const puppeteer = require('puppeteer')
const fs = require('fs')

puppeteer.launch({
  headless: false
}).then(async browser => {
  const page = await browser.newPage()
  page.on('console', msg => console.log(msg))
  await page.exposeFunction('readfile', async (filePath) => {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, text) => {
        if (err) reject(err)
        else resolve(text)
      })
    })
  })
  await page.evaluate(async () => {
    // use window.readfile to read contents of a file
    const content = await window.readfile('C:/Windows/System32/drivers/etc/hosts')
    console.log(content)
  })
  // await browser.close()
})