import puppeteer from 'puppeteer'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { execSync } from 'child_process'
import { readFileSync, unlinkSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const htmlPath = resolve(__dirname, 'docs/index.html')
const tempPdfPath = resolve(__dirname, 'livro-temp.pdf')
const temp2PdfPath = resolve(__dirname, 'livro-temp-2.pdf')
const finalPdfPath = resolve(__dirname, 'livro.pdf')
const tocJsonPath = resolve(__dirname, 'toc.json')

console.log('Iniciando geração de PDF (Dupla Passagem)...')

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage()

await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' })

// Pass 1: Gerar PDF sem números de página para descobrir onde cada capítulo cai
console.log('Passo 1: Gerando PDF temporário para mapeamento...')
await page.pdf({
  path: tempPdfPath,
  width: '6in', height: '9in',
  margin: { top: '14mm', bottom: '14mm', left: '12mm', right: '12mm' },
  preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false
})

// Extrair números de página via PyMuPDF
console.log('Passo 2: Extraindo números de página do PDF temporário...')
execSync(`.venv/bin/python get_toc.py ${tempPdfPath} ${tocJsonPath}`)
const tocMap = JSON.parse(readFileSync(tocJsonPath, 'utf8'))
console.log('Páginas encontradas:', tocMap)

// Injetar números no DOM
console.log('Passo 3: Injetando números no sumário...')
await page.evaluate((tocMap) => {
  for (const [key, pageNum] of Object.entries(tocMap)) {
    const item = document.querySelector(`.bt-item[href="#${key}"]`);
    if (item) {
      // Cria a linha pontilhada (filler)
      const filler = document.createElement('span');
      filler.className = 'bt-filler';
      item.appendChild(filler);
      
      // Cria o número da página
      const pageSpan = document.createElement('span');
      pageSpan.className = 'bt-page';
      pageSpan.textContent = pageNum;
      item.appendChild(pageSpan);
    }
  }
}, tocMap)

// Pass 2: Gerar o PDF com o sumário preenchido
console.log('Passo 4: Gerando PDF com o sumário preenchido...')
await page.pdf({
  path: temp2PdfPath,
  width: '6in', height: '9in',
  margin: { top: '14mm', bottom: '14mm', left: '12mm', right: '12mm' },
  preferCSSPageSize: true, printBackground: true, displayHeaderFooter: false
})

// Carimbar páginas no rodapé
console.log('Passo 5: Carimbando os números de página no rodapé final...')
execSync(`.venv/bin/python stamp_pages.py ${temp2PdfPath} ${finalPdfPath}`)

// Limpeza
console.log('Limpando arquivos temporários...')
try { unlinkSync(tempPdfPath) } catch(e){}
try { unlinkSync(temp2PdfPath) } catch(e){}
try { unlinkSync(tocJsonPath) } catch(e){}

await browser.close()
console.log(`\n🎉 SUCESSO! PDF gerado com sumário dinâmico e páginas: ${finalPdfPath}`)
