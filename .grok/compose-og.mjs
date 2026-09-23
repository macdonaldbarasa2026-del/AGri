import { readFileSync, writeFileSync } from "node:fs";
import { chromium } from "playwright";

const photo = readFileSync("/workspace/public/images/hero-highlands.jpg");
const serif = readFileSync("/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf");
const sans = readFileSync("/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf");

let html = readFileSync("/workspace/.grok/og-card.html", "utf8");
html = html
  .replace(
    'url("file:///usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf") format("truetype")',
    `url("data:font/ttf;base64,${serif.toString("base64")}") format("truetype")`,
  )
  .replace(
    'url("file:///usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf") format("truetype")',
    `url("data:font/ttf;base64,${sans.toString("base64")}") format("truetype")`,
  )
  .replace("__PHOTO__", `data:image/jpeg;base64,${photo.toString("base64")}`);

const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});
await page.setContent(html, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(150);
await page.screenshot({
  path: "/workspace/.grok/og-raw.png",
  type: "png",
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});
await browser.close();
console.log("wrote /workspace/.grok/og-raw.png");
