import { useEffect, useRef } from 'react'

const storageKey='solucoes-digitais-motion'
export const effectStyles = {
 agency:['aurora','Aurora e feixes de luz'],
 dental:['orbits','Órbitas luminosas'],
 law:['pillars','Linhas douradas em movimento'],
 property:['blueprint','Malha arquitetônica'],
 therapy:['waves','Ondas suaves'],
 architecture:['blueprint','Linhas de projeto'],
 beauty:['silk','Gradiente acetinado'],
 restaurant:['embers','Partículas de brasa'],
 fitness:['speed','Feixes de energia'],
 pet:['bubbles','Bolhas flutuantes'],
 photography:['film','Moldura de filme'],
 accounting:['grid','Grade luminosa'],
 tattoo:['scan','Varredura de luz'],
 nutrition:['organic','Formas orgânicas'],
 barber:['stripes','Faixas em movimento'],
 automotive:['speed','Linhas de velocidade'],
 education:['confetti','Formas criativas'],
}

export function MotionPreferences(){
 useEffect(()=>{
  const media=window.matchMedia('(prefers-reduced-motion: reduce)')
  const sync=()=>{
   let saved
   try{saved=localStorage.getItem(storageKey)}catch{}
   if(saved==='on'||saved==='off')document.documentElement.dataset.motion=saved
   else delete document.documentElement.dataset.motion
   window.dispatchEvent(new Event('site-motion-change'))
  }
  sync()
  const storage=event=>{if(event.key===storageKey||event.key===null)sync()}
  window.addEventListener('storage',storage);media.addEventListener('change',sync)
  return()=>{window.removeEventListener('storage',storage);media.removeEventListener('change',sync)}
 },[])
 return null
}

export function VisualAtmosphere({theme='agency'}){
 const ref=useRef(null)
 useEffect(()=>{
  if(!('IntersectionObserver' in window))return
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{entry.target.dataset.visible=String(entry.isIntersecting)}),{rootMargin:'50px'})
  if(ref.current)observer.observe(ref.current)
  return()=>observer.disconnect()
 },[])
 const [type,label]=effectStyles[theme]||effectStyles.agency
 return <div ref={ref} className={'visual-atmosphere atmosphere-'+type} data-effect={label} aria-hidden="true"><div className="fx-glow glow-a"/><div className="fx-glow glow-b"/><div className="fx-grid"/>{Array.from({length:9},(_,i)=><i className="fx-particle" key={i} style={{'--n':i,'--px':((i*37+11)%97)+'%','--py':((i*23+13)%83)+'%','--delay':(-i*1.3)+'s'}}/>)}<div className="fx-ring ring-a"/><div className="fx-ring ring-b"/><div className="fx-scan"/></div>
}

