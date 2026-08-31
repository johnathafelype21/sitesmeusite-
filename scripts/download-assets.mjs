import { businessPhotos } from '../src/business-models.js'
import { mkdir, writeFile, access } from 'node:fs/promises'
import { models } from '../src/models.js'
import { extraPhotos } from '../src/more-models.js'

await mkdir(new URL('../public/images/', import.meta.url), { recursive: true })
for (const model of [...models, ...extraPhotos, ...businessPhotos]) {
  await Promise.all([480, 1200].map(async width => {
    const destination = new URL(`../public/images/${model.image}${width === 480 ? '-small' : ''}.webp`, import.meta.url)
    try { await access(destination); return } catch {}
    const url = `https://images.unsplash.com/photo-${model.photo}?auto=format&fit=crop&w=${width}&q=80&fm=webp`
    const response = await fetch(url, { signal: AbortSignal.timeout(30000) })
    if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) throw new Error(`${model.image}: ${response.status}`)
    const bytes = new Uint8Array(await response.arrayBuffer())
    await writeFile(destination, bytes)
    console.log(`${model.image} ${width}: ${Math.round(bytes.length / 1024)}KB`)
  }))
}
