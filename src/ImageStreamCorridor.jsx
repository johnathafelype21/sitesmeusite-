import { useId, useMemo } from 'react'

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

export default function ImageStreamCorridor({ images, cards = 20, speed = 32, axis = 55, children, className = '' }) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '')
  const right = `stream-right-${id}`
  const left = `stream-left-${id}`
  const cardClass = `stream-card-${id}`
  const path = DEFAULT_PATH
  const css = useMemo(() => `${keyframes(1, right, path)}${keyframes(-1, left, path)}@media(prefers-reduced-motion:reduce){.${cardClass}{animation-play-state:paused!important}}html[data-motion="off"] .${cardClass}{animation-play-state:paused!important}`, [right, left, cardClass])

  return <div className={`image-stream-corridor ${className}`} style={{ containerType: 'inline-size' }}>
    <style>{css}</style>
    <div className="image-stream-stage" aria-hidden="true" style={{ perspective: `${path.perspective}cqw`, perspectiveOrigin: `50% ${axis}%` }}>
      <div className="image-stream-rails">
        {[right, left].map(animationName => Array.from({ length: cards }, (_, index) => {
          const image = images[index % Math.max(images.length, 1)]
          return <div className={`image-stream-card ${cardClass}`} key={`${animationName}-${index}`} style={{
            left: '50%',
            top: `${axis}%`,
            width: `${path.cardWidth}cqw`,
            height: `${path.cardHeight}cqw`,
            marginLeft: `${-path.cardWidth / 2}cqw`,
            marginTop: `${-path.cardHeight / 2}cqw`,
            borderRadius: `${path.cardRadius}cqw`,
            animation: `${animationName} ${speed}s linear infinite`,
            animationDelay: `${-(index * speed) / cards}s`,
          }}><img src={image?.src} alt="" loading="lazy" decoding="async" draggable="false" /></div>
        }))}
      </div>
    </div>
    <div className="image-stream-content">{children}</div>
  </div>
}
