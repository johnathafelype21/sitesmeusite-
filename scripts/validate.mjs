import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import { models, legacySlugs, imagePath } from '../src/models.js'
import worker from '../dist/server/index.js'

const origin = 'https://sitesprime-validation.example'
const routes = ['/', ...models.map(model => `/modelos/${model.slug}`)]
for (const path of routes) {
  const response = await worker.fetch(new Request(origin + path), {})
  assert.equal(response.status, 200, path)
  const html = await response.text()
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `one primary heading: ${path}`)
  assert.ok(!html.includes('__SITE_ORIGIN__'), `origin resolved: ${path}`)
  assert.ok(html.includes(`href="${origin}${path}"`), `canonical URL: ${path}`)
  const model = models.find(item => path.endsWith('/' + item.slug))
  if (model) {
    assert.ok(html.includes(`<title>${model.name.replaceAll('&', '&amp;')}`), `title: ${path}`)
    assert.ok(html.includes(`property="og:image" content="${origin}${imagePath(model)}"`), `model OG image: ${path}`)
    assert.ok(html.includes(`name="twitter:image" content="${origin}${imagePath(model)}"`), `model X image: ${path}`)
    assert.ok(!html.includes('content="' + origin + '/og.png"'), `no inherited home image: ${path}`)
  } else assert.ok(html.includes(`property="og:image" content="${origin}/og.png"`))
  for (const match of html.matchAll(/src="(\/images\/[^"?]+)"/g)) await access(`dist${match[1]}`)
  for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(html.includes(`id="${match[1]}"`), `anchor ${match[1]} on ${path}`)
  assert.equal((await worker.fetch(new Request(origin + path, { method: 'HEAD' }), {})).status, 200)
}
for (const [slug, destination] of Object.entries(legacySlugs)) {
  const response = await worker.fetch(new Request(`${origin}/modelos/${slug}?ref=old`), {})
  assert.equal(response.status, 308)
  assert.equal(response.headers.get('location'), `${origin}/modelos/${destination}?ref=old`)
}
assert.equal((await worker.fetch(new Request(origin + '/missing'), {})).status, 404)
assert.equal((await worker.fetch(new Request(origin + '/', { method: 'POST' }), {})).status, 405)
const forwarded = await worker.fetch(new Request(origin, { headers: { 'X-Forwarded-Host': 'untrusted.example' } }), {})
assert.ok(!(await forwarded.text()).includes('untrusted.example'))
let servedAsset = ''
await worker.fetch(new Request(origin + '/images/dentista.webp'), { ASSETS: { fetch(request) { servedAsset = request.url; return new Response('asset') } } })
assert.equal(servedAsset, origin + '/images/dentista.webp')
for (const model of models) for (const small of [true, false]) {
  const bytes = await readFile(`public${imagePath(model, small)}`)
  assert.equal(bytes.toString('ascii', 0, 4), 'RIFF')
  assert.equal(bytes.toString('ascii', 8, 12), 'WEBP')
}
console.log('PASS: 13 routes, all model metadata, 24 WebP assets, in-page anchors, legacy redirects, HEAD/404/405 responses, trusted origin and asset routing.')
