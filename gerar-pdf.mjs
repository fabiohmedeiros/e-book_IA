import puppeteer from 'puppeteer'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const htmlPath = resolve(__dirname, 'docs/index.html')
const pdfPath = resolve(__dirname, 'livro.pdf')

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage()

const SCALE = 0.62
await page.setViewport({ width: 780, height: 1100 })
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' })

await page.pdf({
  path: pdfPath,
  width: '6in',
  height: '9in',
  margin: { top: '14mm', bottom: '14mm', left: '12mm', right: '12mm' },
  printBackground: true,
  displayHeaderFooter: false,
  scale: SCALE,
})

await browser.close()
console.log(`PDF gerado: ${pdfPath}`)
