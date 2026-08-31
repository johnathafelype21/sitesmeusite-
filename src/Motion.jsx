import { motionAllowed, subscribeMotion } from './motionPreference'
import { Fragment, useEffect, useRef } from 'react'

export function usePageMotion(rootRef) {
 useEffect(()=>{
  const root=rootRef.current
  if(!root)return
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)')
  const fine=window.matchMedia('(pointer: fine) and (min-width: 960px)')
  let observer, frame=0
  const setup=()=>{
   observer?.disconnect()
   root.querySelectorAll('.motion-ready').forEach(el=>el.classList.remove('motion-ready'))
   if(!motionAllowed()||!('IntersectionObserver' in window))return
   observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('motion-entered');observer.unobserve(entry.target)}
   }),{threshold:0.06})
   root.querySelectorAll('.reveal,.pro-heading,.pro-about-grid,.signature-heading,.pro-feature-grid article,.pro-steps article,.pro-journal-grid button,.conversion-grid article,.offer-grid article,.pro-contact-grid,.signature-stage').forEach((el,i)=>{
    if(el.getBoundingClientRect().top>window.innerHeight){el.style.setProperty('--reveal-delay',(i%3)*65+'ms');el.classList.add('motion-ready');observer.observe(el)}
   })
  }
  const move=event=>{
   if(!motionAllowed()||!fine.matches||event.pointerType!=='mouse')return
   const card=event.target.closest('.signature-stage,.pro-gallery-item,.offer-grid article,.conversion-grid article')
   if(!card||!root.contains(card))return
   const rect=card.getBoundingClientRect()
   card.style.setProperty('--pointer-x',((event.clientX-rect.left)/rect.width*100)+'%')
   card.style.setProperty('--pointer-y',((event.clientY-rect.top)/rect.height*100)+'%')
  }
  const scroll=()=>{
   if(frame||!motionAllowed())return
   frame=requestAnimationFrame(()=>{
    const doc=document.documentElement
    root.style.setProperty('--reading-progress',Math.max(0,Math.min(1,window.scrollY/(doc.scrollHeight-window.innerHeight||1))))
    const hero=root.querySelector('.pro-hero-media')
    if(hero&&fine.matches&&window.scrollY<window.innerHeight*1.5)hero.style.setProperty('--image-shift',Math.min(window.scrollY*.075,45)+'px')
    frame=0
   })
  }
  setup()
  const unsubscribeMotion=subscribeMotion(setup)
  root.addEventListener('pointermove',move,{passive:true})
  window.addEventListener('scroll',scroll,{passive:true})
  return()=>{observer?.disconnect();cancelAnimationFrame(frame);root.removeEventListener('pointermove',move);window.removeEventListener('scroll',scroll);unsubscribeMotion()}
 },[rootRef])
}
export function ReadingProgress(){return <div className="reading-progress" aria-hidden="true"/>}
export function WordReveal({text}) {return <span className="word-reveal">{text.split(' ').map((word,i)=><Fragment key={i}><span style={{'--word-delay':i*65+'ms'}}>{word}</span>{' '}</Fragment>)}</span>}
export function BreathingOrb(){const ref=useRef(null);return <div ref={ref} className="breathing-orb" aria-hidden="true"><i/><i/><i/><span>um momento<br/>de presença</span></div>}

