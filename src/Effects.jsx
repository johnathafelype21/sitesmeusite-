import { useEffect, useRef } from 'react'
import { MessageCircle } from 'lucide-react'
import { whatsapp } from './brand'

export function WhatsAppButton({ model }) {
  return <a className="whatsapp-float" href={whatsapp(model ? `Olá! Gostei do modelo ${model.name} e quero um site para meu negócio.` : undefined)} target="_blank" rel="noopener noreferrer" aria-label="Conversar com a Soluções Digitais no WhatsApp"><span>Vamos criar seu site?</span><MessageCircle size={27} /><span className="wa-online" aria-hidden="true" /></a>
}

export function AmbientEffects() {
  const ref = useRef(null)
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const desktop = window.matchMedia('(min-width: 961px) and (pointer: fine)')
    let frame = 0
    const update = () => {
      frame = 0
      if (motion.matches || !desktop.matches) return
      const offset = Math.min(window.scrollY * 0.13, 90)
      ref.current?.style.setProperty('--parallax', `${offset}px`)
    }
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    const reset = () => { ref.current?.style.setProperty('--parallax', '0px'); scroll() }
    window.addEventListener('scroll', scroll, { passive: true })
    motion.addEventListener('change', reset); desktop.addEventListener('change', reset)
    return () => { window.removeEventListener('scroll', scroll); motion.removeEventListener('change', reset); desktop.removeEventListener('change', reset); cancelAnimationFrame(frame) }
  }, [])
  return <div ref={ref} className="ambient-effects" aria-hidden="true"><div className="ambient-orb orb-cyan" /><div className="ambient-orb orb-blue" /><div className="ambient-orb orb-violet" /><div className="ambient-grid" /><div className="beam beam-one" /><div className="beam beam-two" /></div>
}

export function useSpotlight(ref) {
  useEffect(() => {
    const root = ref.current
    if (!root) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pointer = event => {
      if (reduced.matches || event.pointerType !== 'mouse') return
      const card = event.target.closest('.spotlight-card')
      if (!card || !root.contains(card)) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
      card.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
    }
    root.addEventListener('pointermove', pointer, { passive: true })
    return () => root.removeEventListener('pointermove', pointer)
  }, [ref])
}
