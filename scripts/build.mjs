import { build, createServer } from 'vite'
import { mkdir, readFile, writeFile, cp } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { models, legacySlugs, imagePath } from '../src/models.js'

await build()
const dist = resolve('dist')
const template = await readFile(resolve(dist, 'index.html'), 'utf8')
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const { default: App } = await server.ssrLoadModule('/src/App.jsx')
const escaped = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char])
const configuredOrigin = process.env.SITE_ORIGIN || ((process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL) ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL}` : 'https://sitesmeusite-preview.vercel.app')
const originUrl = new URL(configuredOrigin)
if (originUrl.protocol !== 'https:') throw new Error('SITE_ORIGIN must use HTTPS')
const pages = {}
const routes = [{ path: '/', model: null }, ...models.map(model => ({ path: `/modelos/${model.slug}`, model })), { path: '/404', model: null }]
try {
  for (const { path, model } of routes) {
    const title = model ? `${model.name} — Modelo para ${model.profession} | Soluções Digitais` : path === '/404' ? 'Página não encontrada | Soluções Digitais' : 'Soluções Digitais — Seu talento merece um site à altura'
    const description = model ? `Modelo demonstrativo para ${model.profession.toLowerCase()}. ${model.description}` : 'Sites personalizados para dentistas, advogados, corretores, terapeutas e outros profissionais. Explore 16 modelos com identidade própria, imagens e design responsivo.'
    const ogImage = model ? imagePath(model) : '/og.png'
    const head = `<title>${escaped(title)}</title>\n<meta name="description" content="${escaped(description)}">\n<meta name="robots" content="${path === '/404' ? 'noindex' : 'index, follow'}">\n<link rel="canonical" href="__SITE_ORIGIN__${path === '/404' ? '/' : path}">\n<meta property="og:site_name" content="Soluções Digitais">\n<meta property="og:locale" content="pt_BR">\n<meta property="og:type" content="website">\n<meta property="og:title" content="${escaped(title)}">\n<meta property="og:description" content="${escaped(description)}">\n<meta property="og:url" content="__SITE_ORIGIN__${path}">\n<meta property="og:image" content="__SITE_ORIGIN__${ogImage}">\n<meta property="og:image:alt" content="${escaped(model?.alt || 'Soluções Digitais — Seu talento merece um site à altura')}">\n<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:title" content="${escaped(title)}">\n<meta name="twitter:description" content="${escaped(description)}">\n<meta name="twitter:image" content="__SITE_ORIGIN__${ogImage}">`
    const markup = renderToString(createElement(App, { path }))
    const html = template.replace(/<title>.*?<\/title>/s, head).replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
    pages[path] = html
    const destination = path === '/' ? resolve(dist, 'index.html') : path === '/404' ? resolve(dist, '404.html') : resolve(dist, path.slice(1), 'index.html')
    await mkdir(resolve(destination, '..'), { recursive: true })
    await writeFile(destination, html.replaceAll('__SITE_ORIGIN__', originUrl.origin))
  }
} finally { await server.close() }

// Keep the Vite/Vercel static output. Sites gets a small ESM Worker and the same assets.
await mkdir(resolve(dist, 'server'), { recursive: true })
await mkdir(resolve(dist, 'client'), { recursive: true })
for (const asset of ['assets', 'images', 'og.png', 'logo.jpg', 'favicon.svg']) await cp(resolve(dist, asset), resolve(dist, 'client', asset), { recursive: true })
const workerTemplate = await readFile('src/worker.template.js', 'utf8')
const worker = `const pages = ${JSON.stringify(pages)};\nconst legacySlugs = ${JSON.stringify(legacySlugs)};\n${workerTemplate}`
await writeFile(resolve(dist, 'server/index.js'), worker)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.filter(route => route.path !== '/404').map(route => `<url><loc>${escaped(originUrl.origin + route.path)}</loc></url>`).join('')}</urlset>`
await writeFile(resolve(dist, 'sitemap.xml'), sitemap)
await writeFile(resolve(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${originUrl.origin}/sitemap.xml\n`)
console.log(`Prerendered ${routes.length} pages, with page-specific metadata. Sites Worker ready.`)
