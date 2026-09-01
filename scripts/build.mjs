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
    const title = model ? `${model.name} — Modelo de Site para ${model.profession} | Soluções Digitais` : path === '/404' ? 'Página não encontrada | Soluções Digitais' : 'Criação de Sites Profissionais | Soluções Digitais'
    const description = model ? `Modelo de site profissional para ${model.profession.toLowerCase()}. ${model.description}` : 'Sites profissionais, identidade visual, Perfil da Empresa no Google e ensaios fotográficos com IA para empresas e profissionais. Conheça 24 modelos.'
    const ogImage = model ? imagePath(model) : '/og.png'
    const graph = model ? {'@context':'https://schema.org','@graph':[{'@type':'BreadcrumbList','@id':'__SITE_ORIGIN__'+path+'#breadcrumb','itemListElement':[{'@type':'ListItem','position':1,'name':'Soluções Digitais','item':'__SITE_ORIGIN__/'},{'@type':'ListItem','position':2,'name':'Modelos de sites','item':'__SITE_ORIGIN__/#modelos'},{'@type':'ListItem','position':3,'name':model.name,'item':'__SITE_ORIGIN__'+path}]},{'@type':'WebPage','@id':'__SITE_ORIGIN__'+path+'#webpage','url':'__SITE_ORIGIN__'+path,'name':title,'description':description,'breadcrumb':{'@id':'__SITE_ORIGIN__'+path+'#breadcrumb'},'isPartOf':{'@id':'__SITE_ORIGIN__/#website'}}]} : {'@context':'https://schema.org','@graph':[{'@type':'Organization','@id':'__SITE_ORIGIN__/#organization','name':'Soluções Digitais','legalName':'Soluções Digitais','url':'__SITE_ORIGIN__/','logo':{'@type':'ImageObject','url':'__SITE_ORIGIN__/logo.jpg','width':1080,'height':1080},'taxID':'48.998.191/0001-59','telephone':'+55 62 99173-5288','sameAs':['https://www.instagram.com/solucoes_digitaisnet/'],'contactPoint':{'@type':'ContactPoint','telephone':'+55 62 99173-5288','contactType':'sales','availableLanguage':'Portuguese'}},{'@type':'WebSite','@id':'__SITE_ORIGIN__/#website','url':'__SITE_ORIGIN__/','name':'Soluções Digitais','inLanguage':'pt-BR','publisher':{'@id':'__SITE_ORIGIN__/#organization'}},{'@type':'Service','@id':'__SITE_ORIGIN__/#service','name':'Presença digital profissional','serviceType':'Criação de sites, identidade visual, organização do Perfil da Empresa no Google e ensaios fotográficos com inteligência artificial','provider':{'@id':'__SITE_ORIGIN__/#organization'},'areaServed':{'@type':'Country','name':'Brasil'},'url':'__SITE_ORIGIN__/#presenca-digital','hasOfferCatalog':{'@type':'OfferCatalog','name':'Serviços de presença digital','itemListElement':['Criação de sites profissionais','Identidade visual e logomarca','Organização do Perfil da Empresa no Google','Ensaio fotográfico com inteligência artificial'].map(name=>({'@type':'Offer','itemOffered':{'@type':'Service','name':name}}))}},{'@type':'FAQPage','@id':'__SITE_ORIGIN__/#faq','mainEntity':[['O site vai ficar com a identidade da minha marca?','Sim. Cores, fotos, textos, serviços e organização são adaptados ao negócio.'],['Funciona bem no celular?','Sim. Os layouts se reorganizam para celulares, tablets e computadores.'],['Posso escolher um modelo de outra profissão?','Sim. A estrutura e o conteúdo podem ser personalizados para qualquer área de atuação.'],['É possível colocar WhatsApp e agendamento?','Sim. Essas integrações podem fazer parte do projeto.'],['Qual é o prazo e o valor do projeto?','Prazo e investimento dependem das páginas, do conteúdo e das funcionalidades escolhidas.'],['Vocês também criam logomarca e identidade visual?','Sim. Temos pacotes de identidade visual com logomarca, paleta de cores, tipografia e aplicações digitais.'],['Vocês fazem o cadastro no Google Meu Negócio?','Ajudamos a criar ou organizar o Perfil da Empresa no Google. A elegibilidade, a verificação e a aprovação são definidas pelo Google.'],['Como funciona o ensaio fotográfico com inteligência artificial?','Criamos cenas profissionais a partir de referências fornecidas e autorizadas pelo cliente, preparadas para uso no site e nas redes.']].map(([name,text])=>({'@type':'Question','name':name,'acceptedAnswer':{'@type':'Answer','text':text}}))}]}
    const structuredData = JSON.stringify(graph).replaceAll('<','\\u003c')
    const head = `<title>${escaped(title)}</title>\n<meta name="description" content="${escaped(description)}">\n<meta name="robots" content="${path === '/404' ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}">\n<meta name="application-name" content="Soluções Digitais">\n<link rel="canonical" href="__SITE_ORIGIN__${path === '/404' ? '/' : path}">\n<meta property="og:site_name" content="Soluções Digitais">\n<meta property="og:locale" content="pt_BR">\n<meta property="og:type" content="website">\n<meta property="og:title" content="${escaped(title)}">\n<meta property="og:description" content="${escaped(description)}">\n<meta property="og:url" content="__SITE_ORIGIN__${path}">\n<meta property="og:image" content="__SITE_ORIGIN__${ogImage}">\n<meta property="og:image:alt" content="${escaped(model?.alt || 'Soluções Digitais — criação de sites profissionais')}">\n<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:title" content="${escaped(title)}">\n<meta name="twitter:description" content="${escaped(description)}">\n<meta name="twitter:image" content="__SITE_ORIGIN__${ogImage}">\n<script type="application/ld+json">${structuredData}</script>`
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
for (const asset of ['assets', 'images', 'ai-portraits', 'og.png', 'logo.jpg', 'whatsapp.png', 'favicon.svg']) await cp(resolve(dist, asset), resolve(dist, 'client', asset), { recursive: true })
const workerTemplate = await readFile('src/worker.template.js', 'utf8')
const worker = `const pages = ${JSON.stringify(pages)};\nconst legacySlugs = ${JSON.stringify(legacySlugs)};\n${workerTemplate}`
await writeFile(resolve(dist, 'server/index.js'), worker)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.filter(route => route.path !== '/404').map(route => `<url><loc>${escaped(originUrl.origin + route.path)}</loc></url>`).join('')}</urlset>`
await writeFile(resolve(dist, 'sitemap.xml'), sitemap)
await writeFile(resolve(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${originUrl.origin}/sitemap.xml\n`)
console.log(`Prerendered ${routes.length} pages, with page-specific metadata. Sites Worker ready.`)
