export const motionAllowed = () => {
 if(typeof window==='undefined') return false
 const override=document.documentElement.dataset.motion
 return override==='on'||(override!=='off'&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
}
export const subscribeMotion = listener => {
 const media=window.matchMedia('(prefers-reduced-motion: reduce)')
 window.addEventListener('site-motion-change',listener)
 media.addEventListener('change',listener)
 return()=>{window.removeEventListener('site-motion-change',listener);media.removeEventListener('change',listener)}
}

