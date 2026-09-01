import { useEffect, useId, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const DEFAULT_PATH = {
  perspective: 30,
  cardWidth: 18,
  cardHeight: 25,
  cardRadius: 1.1,
  birthHeight: 2.6,
  exitHeight: 46,
  railBirth: -11,
  railExit: 44,
  fan: 3.3,
  turnBirth: 6,
  turnExit: 28,
  stops: 24,
}

function keyframes(direction, name, path) {
  const steps = []
  for (let index = 0; index <= path.stops; index += 1) {
    const progress = index / path.stops
    const scale = (path.birthHeight / path.cardHeight) * Math.pow(path.exitHeight / path.birthHeight, progress)
    const depth = path.perspective * (1 - 1 / scale)
    const rail = path.railExit - (path.railExit - path.railBirth) * Math.pow(1 - progress, path.fan)
    const turn = path.turnBirth + (path.turnExit - path.turnBirth) * progress
    steps.push(`${(progress * 100).toFixed(2)}%{transform:translate3d(${(direction * rail).toFixed(2)}cqw,0,${depth.toFixed(2)}cqw) rotateY(${(-direction * turn).toFixed(2)}deg)}`)
  }
  return `@keyframes ${name}{${steps.join('')}}`
}

export default function ImageStreamCorridor({ images, cards = 8, speed = 28, axis = 55, className = '' }) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '')
  const right = `stream-right-${id}`
  const left = `stream-left-${id}`
  const cardClass = `stream-card-${id}`
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const path = DEFAULT_PATH
  const css = useMemo(() => `${keyframes(1, right, path)}${keyframes(-1, left, path)}.${cardClass}.stream-side-right{animation-name:${right}!important;animation-duration:${speed}s!important;animation-timing-function:linear!important;animation-iteration-count:infinite!important;animation-play-state:running!important;animation-delay:var(--stream-delay)!important}.${cardClass}.stream-side-left{animation-name:${left}!important;animation-duration:${speed}s!important;animation-timing-function:linear!important;animation-iteration-count:infinite!important;animation-play-state:running!important;animation-delay:var(--stream-delay)!important}`, [right, left, cardClass, speed])

  useEffect(() => {
    if (images.length < 2) return undefined
    const timer = window.setInterval(() => setFeaturedIndex(index => (index + 1) % images.length), 3200)
    return () => window.clearInterval(timer)
  }, [images.length])

  const featured = images[featuredIndex]
  const select = direction => setFeaturedIndex(index => (index + direction + images.length) % images.length)

  return <div className={`image-stream-corridor ${className}`} style={{ containerType: 'inline-size' }}>
    <style>{css}</style>
    <div className="image-stream-stage" aria-hidden="true" style={{ perspective: `${path.perspective}cqw`, perspectiveOrigin: `50% ${axis}%` }}>
      <div className="image-stream-rails">
        {[right, left].map((animationName, sideIndex) => Array.from({ length: cards }, (_, index) => {
          const image = images[(index * 2 + sideIndex) % Math.max(images.length, 1)]
          return <div className={`image-stream-card ${cardClass} ${sideIndex === 0 ? 'stream-side-right' : 'stream-side-left'}`} key={`${animationName}-${index}`} style={{
            left: '50%',
            top: `${axis}%`,
            width: `${path.cardWidth}cqw`,
            height: `${path.cardHeight}cqw`,
            marginLeft: `${-path.cardWidth / 2}cqw`,
            marginTop: `${-path.cardHeight / 2}cqw`,
            borderRadius: `${path.cardRadius}cqw`,
            '--stream-delay': `${-(index * speed) / cards}s`,
          }}><img src={image?.src} alt="" loading="lazy" decoding="async" draggable="false" /></div>
        }))}
      </div>
    </div>
    {featured && <figure className="stream-featured">
      <div className="stream-featured-frame"><img src={featured.src} alt={`Retrato profissional conceitual para ${featured.profession}`} decoding="async" /></div>
      <figcaption><span><b>{String(featuredIndex + 1).padStart(2, '0')}</b> / {String(images.length).padStart(2, '0')}</span><strong>{featured.profession}</strong></figcaption>
    </figure>}
    {featured && <div className="stream-controls"><button type="button" onClick={() => select(-1)} aria-label="Ver profissão anterior"><ArrowLeft size={18} /></button><button type="button" onClick={() => select(1)} aria-label="Ver próxima profissão"><ArrowRight size={18} /></button></div>}
  </div>
}
