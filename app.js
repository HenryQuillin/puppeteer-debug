const express = require('express');
const puppeteer = require("puppeteer");
const pluginStealth = require("puppeteer-extra-plugin-stealth");


const app = express();
const port = process.env.PORT || 3000;

app.post('/', async (req, res) => {
  // puppeteer.use(pluginStealth());
  const browser = await puppeteer.launch({
    // headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  // c

  const page = await browser.newPage();
  console.log('at new page')
  await page.goto('https://example.com');
  console.log('at example.com')

  const title = await page.title();
  await browser.close();
  console.log(`Title of the page was: ${title}`); 

  res.send(`Title of the page was: ${title}`);
});
// 
app.listen(port, () => console.log(`App listening on port ${port}!`));
