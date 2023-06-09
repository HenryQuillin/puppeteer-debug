const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.goto('https://example.com');

  const title = await page.title();
  await browser.close();

  res.send(`Title of the page was: ${title}`);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
