import './style.css'

/* ============================================================
   TEMA DE LEITURA — ciclo claro › sépia › escuro
   (toggle + prefers-color-scheme + localStorage)
   ============================================================ */
const root = document.documentElement
const THEME_KEY = 'ebook-ia-theme'
const THEMES = ['light', 'sepia', 'dark']
const THEME_LABEL = { light: 'claro', sepia: 'sépia', dark: 'escuro' }

function applyTheme(theme) {
  if (!THEMES.includes(theme)) theme = 'light'
  root.classList.toggle('dark', theme === 'dark')
  root.classList.toggle('sepia', theme === 'sepia')

  const next = THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length]
  document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
    btn.setAttribute('aria-label', `Tema ${THEME_LABEL[theme]} — clique para ${THEME_LABEL[next]}`)
    const icons = {
      light: btn.querySelector('.ico-sun'),
      sepia: btn.querySelector('.ico-sepia'),
      dark: btn.querySelector('.ico-moon'),
    }
    Object.entries(icons).forEach(([name, el]) => {
      if (el) el.style.display = name === theme ? 'block' : 'none'
    })
    const nameEl = btn.querySelector('[data-theme-name]')
    if (nameEl) nameEl.textContent = `· ${THEME_LABEL[theme]}`
  })
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY)
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(saved || (prefersDark ? 'dark' : 'light'))
}

function currentTheme() {
  if (root.classList.contains('dark')) return 'dark'
  if (root.classList.contains('sepia')) return 'sepia'
  return 'light'
}

document.querySelectorAll('[data-theme-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const next = THEMES[(THEMES.indexOf(currentTheme()) + 1) % THEMES.length]
    localStorage.setItem(THEME_KEY, next)
    applyTheme(next)
  })
})

// Acompanha mudança do sistema enquanto o usuário não escolheu manualmente
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem(THEME_KEY)) applyTheme(e.matches ? 'dark' : 'light')
})

initTheme()

/* ============================================================
   DRAWER (menu lateral no mobile)
   ============================================================ */
const body = document.body
const openNav = () => body.classList.add('nav-open')
const closeNav = () => body.classList.remove('nav-open')

document.querySelector('[data-nav-open]')?.addEventListener('click', openNav)
document.getElementById('overlay')?.addEventListener('click', closeNav)
document.querySelectorAll('.toc a').forEach((a) =>
  a.addEventListener('click', () => { if (window.innerWidth <= 1024) closeNav() })
)
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav() })

/* ============================================================
   BARRA DE PROGRESSO DE LEITURA
   ============================================================ */
const progressBar = document.getElementById('progress-bar')
const toTop = document.getElementById('to-top')

function onScroll() {
  const h = document.documentElement
  const scrolled = h.scrollTop
  const max = h.scrollHeight - h.clientHeight
  const pct = max > 0 ? (scrolled / max) * 100 : 0
  if (progressBar) progressBar.style.width = pct + '%'
  if (toTop) toTop.classList.toggle('show', scrolled > 600)
}
document.addEventListener('scroll', onScroll, { passive: true })
onScroll()

toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))

/* ============================================================
   SCROLL SPY (destaca o capítulo ativo no índice)
   ============================================================ */
const tocLinks = new Map()
document.querySelectorAll('.toc a[href^="#"]').forEach((a) => {
  tocLinks.set(a.getAttribute('href').slice(1), a)
})

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        tocLinks.forEach((a) => a.classList.remove('active'))
        const link = tocLinks.get(entry.target.id)
        if (link) link.classList.add('active')
      }
    })
  },
  { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
)
document.querySelectorAll('.sheet[id]').forEach((s) => spy.observe(s))

/* ============================================================
   BOTÕES "COPIAR" DOS PROMPTS
   ============================================================ */
const ICON_COPY =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'
const ICON_CHECK =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>'

document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.innerHTML = ICON_COPY + '<span>Copiar</span>'
  btn.addEventListener('click', async () => {
    const targetSel = btn.getAttribute('data-copy-target')
    let text
    if (targetSel) {
      const el = document.querySelector(targetSel)
      text = el ? el.textContent.replace(/\s+/g, ' ').trim() : ''
    } else {
      const code = btn.parentElement.querySelector('.prompt-code')
      text = code ? code.textContent.trim() : ''
    }
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    btn.classList.add('copied')
    btn.innerHTML = ICON_CHECK + '<span>Copiado!</span>'
    setTimeout(() => {
      btn.classList.remove('copied')
      btn.innerHTML = ICON_COPY + '<span>Copiar</span>'
    }, 1800)
  })
})

/* ============================================================
   TABELA FILTRÁVEL E ORDENÁVEL (Cap. 6)
   ============================================================ */
const toolTable = document.getElementById('tools-table')
const toolFilter = document.getElementById('tools-filter')

if (toolTable && toolFilter) {
  const tbody = toolTable.querySelector('tbody')
  const getRows = () => Array.from(tbody.querySelectorAll('tr'))

  toolFilter.addEventListener('input', () => {
    const q = toolFilter.value.trim().toLowerCase()
    getRows().forEach((tr) => {
      tr.style.display = tr.textContent.toLowerCase().includes(q) ? '' : 'none'
    })
  })

  toolTable.querySelectorAll('thead th').forEach((th, idx) => {
    th.addEventListener('click', () => {
      const asc = !th.classList.contains('sort-asc')
      toolTable.querySelectorAll('thead th').forEach((h) => h.classList.remove('sort-asc', 'sort-desc'))
      th.classList.add(asc ? 'sort-asc' : 'sort-desc')
      const rows = getRows()
      rows.sort((a, b) => {
        const av = a.children[idx].textContent.trim().toLowerCase()
        const bv = b.children[idx].textContent.trim().toLowerCase()
        return asc ? av.localeCompare(bv, 'pt-BR') : bv.localeCompare(av, 'pt-BR')
      })
      rows.forEach((r) => tbody.appendChild(r))
    })
  })
}

/* ============================================================
   BUSCA INTERNA (destaca ocorrências no conteúdo)
   ============================================================ */
const searchInput = document.getElementById('search-input')
const searchCount = document.getElementById('search-count')
const searchScope = document.querySelector('.content-wrap')
let hits = []
let hitIndex = -1

function clearHighlights() {
  searchScope.querySelectorAll('mark.search-hit').forEach((m) => {
    const parent = m.parentNode
    parent.replaceChild(document.createTextNode(m.textContent), m)
    parent.normalize()
  })
  hits = []
  hitIndex = -1
}

function highlight(term) {
  if (!term || term.length < 2) {
    if (searchCount) searchCount.textContent = ''
    return
  }
  const lower = term.toLowerCase()
  const walker = document.createTreeWalker(searchScope, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT
      const p = node.parentElement
      if (!p || p.closest('script, style, .copy-btn, #search-count')) return NodeFilter.FILTER_REJECT
      return node.nodeValue.toLowerCase().includes(lower)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT
    },
  })
  const targets = []
  let n
  while ((n = walker.nextNode())) targets.push(n)

  targets.forEach((node) => {
    const frag = document.createDocumentFragment()
    const text = node.nodeValue
    let i = 0
    let idx
    const lc = text.toLowerCase()
    while ((idx = lc.indexOf(lower, i)) !== -1) {
      if (idx > i) frag.appendChild(document.createTextNode(text.slice(i, idx)))
      const mark = document.createElement('mark')
      mark.className = 'search-hit'
      mark.textContent = text.slice(idx, idx + term.length)
      frag.appendChild(mark)
      i = idx + term.length
    }
    if (i < text.length) frag.appendChild(document.createTextNode(text.slice(i)))
    node.parentNode.replaceChild(frag, node)
  })

  hits = Array.from(searchScope.querySelectorAll('mark.search-hit'))
  if (searchCount) {
    searchCount.textContent = hits.length
      ? `${hits.length} resultado${hits.length > 1 ? 's' : ''} — Enter para navegar`
      : 'Nenhum resultado'
  }
  if (hits.length) gotoHit(0)
}

function gotoHit(i) {
  if (!hits.length) return
  hits.forEach((h) => h.classList.remove('current'))
  hitIndex = (i + hits.length) % hits.length
  const el = hits[hitIndex]
  el.classList.add('current')
  el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  if (searchCount) searchCount.textContent = `${hitIndex + 1} de ${hits.length}`
}

let searchTimer
searchInput?.addEventListener('input', () => {
  clearTimeout(searchTimer)
  searchTimer = setTimeout(() => {
    clearHighlights()
    highlight(searchInput.value.trim())
  }, 220)
})

searchInput?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && hits.length) {
    e.preventDefault()
    gotoHit(hitIndex + (e.shiftKey ? -1 : 1))
  }
  if (e.key === 'Escape') {
    searchInput.value = ''
    clearHighlights()
    if (searchCount) searchCount.textContent = ''
  }
})
