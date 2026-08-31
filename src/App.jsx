import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ArrowRight, ArrowLeft, Check, Plus, Minus, Menu, X, Sparkles, Smartphone, Monitor, Layers3, MousePointer2, Palette, Zap, Heart, MoveUpRight, Download, Copy, CheckCheck, Leaf, ShieldCheck, Smile, MapPin } from 'lucide-react'
import { categories, models, imagePath, findModel, legacySlugs } from './models'

const iconMap = { dental: Smile, law: ShieldCheck, therapy: Leaf, property: MapPin }
const faqs = [
  ['O site vai ficar com a identidade da minha marca?', 'Sim. Os modelos são um ponto de partida: cores, fotos, textos, serviços e organização podem ser adaptados ao seu negócio. Podemos também criar uma direção visual do zero.'],
  ['Funciona bem no celular?', 'Os layouts se reorganizam para celulares, tablets e computadores, com navegação por toque e imagens em tamanhos adequados a cada tela.'],
  ['Posso escolher um modelo de outra profissão?', 'Pode! Escolha pelo segmento ou pelo estilo que mais combina com você. A estrutura e o conteúdo são personalizados para a sua área de atuação.'],
  ['É possível colocar WhatsApp e agendamento?', 'Sim, essas integrações podem fazer parte do seu projeto. O número oficial e a ferramenta de agenda são definidos durante a personalização. Os exemplos desta vitrine não fazem agendamentos reais.'],
  ['Qual é o prazo e o valor do projeto?', 'Depende das páginas, do conteúdo e das funcionalidades escolhidas. Prepare um resumo do que você precisa na seção “Seu projeto” para definir o escopo e solicitar uma proposta personalizada.'],
]

function Brand() {
  return <span className="brand"><span className="brand-symbol"><ArrowUpRight size={23} strokeWidth={2.5} /></span><span>sites<span className="brand-prime">prime</span><span className="brand-dot">.</span></span></span>
}
function Photo({ model, small = false, eager = false, className = '' }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div className={`photo-fallback ${className}`} role="img" aria-label={model.alt}><span>{model.brand}</span><small>{model.profession}</small></div>
  return <img className={className} src={imagePath(model, small)} srcSet={small ? undefined : `${imagePath(model, true)} 480w, ${imagePath(model)} 1200w`} sizes={small ? undefined : '(max-width: 640px) 100vw, 60vw'} alt={model.alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} decoding="async" onError={() => setFailed(true)} />
}
function ModelPreview({ model, hero = false }) {
  const Icon = iconMap[model.theme] || Sparkles
  return <div className={`model-preview theme-${model.theme}`}>
    <div className="browser-chrome"><span><i /><i /><i /></span><span>{model.slug.replaceAll('-', '')}.com.br</span><ArrowUpRight size={9} /></div>
    <div className="preview-page"><div className="preview-nav"><b>{model.brand}</b><span>Sobre <i /> Serviços <i /> Contato</span><span className="preview-nav-cta">Vamos conversar ↗</span></div>
      <div className="preview-hero"><div className="preview-copy"><small>{model.kicker}</small><strong>{model.headline}</strong><p>{model.description}</p><span className="preview-button">{model.cta}<ArrowUpRight size={11} /></span></div><Photo model={model} small={!hero} eager={hero} /><div className="preview-photo-shade" /></div>
      <div className="preview-bottom"><span><Icon size={12} /> {model.services[0][0]}</span><span>{model.services[1][0]}</span><span>{model.services[2][0]}</span></div>
    </div>
  </div>
}
function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => { const close = e => { if (e.key === 'Escape') setOpen(false) }; document.addEventListener('keydown', close); return () => document.removeEventListener('keydown', close) }, [])
  return <header className="site-header"><div className="container header-inner"><a href="/" aria-label="SitesPrime — início"><Brand /></a>
    <nav className="desktop-nav" aria-label="Navegação principal"><a href="#modelos">Modelos de sites <span>12</span></a><a href="#diferenciais">Por que a SitesPrime?</a><a href="#processo">Como funciona</a></nav>
    <a className="button button-dark header-cta" href="#contato">Vamos criar seu site <ArrowUpRight size={17} /></a>
    <button className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    {open && <nav id="mobile-menu" className="mobile-nav" aria-label="Navegação no celular">{[['#modelos', 'Modelos de sites'], ['#diferenciais', 'Por que a SitesPrime?'], ['#processo', 'Como funciona'], ['#contato', 'Vamos criar seu site']].map(([href, title]) => <a href={href} key={href} onClick={() => setOpen(false)}>{title}<ArrowUpRight size={18} /></a>)}</nav>}
  </div></header>
}
function Hero() {
  return <section className="hero" id="inicio"><div className="container hero-grid">
    <div className="hero-copy"><div className="eyebrow"><span className="status-dot" /> DESIGN QUE VALORIZA O QUE VOCÊ FAZ</div>
      <h1>Seu talento<br />merece um site<br /><span className="highlight">à altura.<Sparkles size={30} /></span></h1>
      <p>Você cuida do seu negócio.<br />A gente cria a presença digital que ele merece.</p>
      <div className="hero-actions"><a className="button button-dark" href="#modelos">Encontre o seu modelo <ArrowUpRight size={19} /></a><a className="text-link" href="#processo">Como funciona <ArrowRight size={17} /></a></div>
      <div className="hero-trust"><span><Check size={15} /> Design sob medida</span><span><Check size={15} /> Feito para celular</span></div>
    </div>
    <div className="hero-showcase" aria-label="Exemplos de sites para diferentes profissões"><div className="showcase-orbit orbit-one" /><div className="showcase-orbit orbit-two" />
      <a href="/modelos/prime-urban" className="hero-window hero-property" aria-label="Explorar modelo Prime Urban Imóveis"><ModelPreview model={models[2]} hero /></a>
      <a href="/modelos/clinica-oralis" className="hero-window hero-dental" aria-label="Explorar modelo Clínica Oralis"><ModelPreview model={models[0]} hero /></a>
      <a href="/modelos/essencia-terapias" className="hero-phone" aria-label="Explorar modelo Essência Terapias"><div className="phone-camera" /><div className="phone-brand">essência <Leaf size={12} /></div><small>UM TEMPO PARA VOCÊ</small><strong>Permita-se<br />florescer.</strong><Photo model={models[3]} small eager /><span>Conheça o espaço ↗</span></a>
      <div className="floating-note note-design"><span className="note-icon"><Palette size={19} /></span><div>Seu negócio.<strong>Sua identidade.</strong></div></div>
      <div className="floating-note note-mobile"><span className="mobile-dot"><Check size={13} /></span>Bonito em qualquer tela<Smartphone size={15} /></div>
      <span className="showcase-caption"><span className="caption-line" /> UM UNIVERSO DE POSSIBILIDADES</span>
    </div>
  </div></section>
}
function Gallery() {
  const [category, setCategory] = useState('Todos')
  const [expanded, setExpanded] = useState(false)
  const matches = models.filter(model => category === 'Todos' || model.category === category)
  const visible = category === 'Todos' && !expanded ? matches.slice(0, 6) : matches
  return <section className="gallery-section section-pad" id="modelos"><div className="container">
    <div className="section-top reveal"><div><span className="section-label"><span /> FEITO PARA A SUA PROFISSÃO</span><h2>Um modelo.<br />Infinitas <em>possibilidades.</em></h2></div><p>Encontre um estilo que combina com você.<br />Nós personalizamos cada detalhe para<br className="desktop-break" /> deixar com a cara do seu negócio.</p></div>
    <div className="gallery-toolbar"><div className="category-filters" role="group" aria-label="Filtrar modelos por profissão">{categories.map(item => <button key={item} className={item === category ? 'active' : ''} aria-pressed={item === category} onClick={() => setCategory(item)}>{item}{item === 'Todos' && <span>12</span>}</button>)}</div><span className="filter-caption">ENCONTRE O SEU ESTILO</span></div>
    <p className="sr-only" role="status">{matches.length} modelos em {category}. Exibindo {visible.length}.</p>
    <div className="portfolio-grid">{visible.map((model, index) => <article className={`project-card card-${model.theme}`} key={model.slug} style={{ '--card-index': index }}>
      <a href={`/modelos/${model.slug}`} className="project-visual" aria-label={`Explorar modelo ${model.name}`}><span className="project-type">{model.profession}</span><div className="project-browser"><ModelPreview model={model} /></div><span className="project-open"><ArrowUpRight size={22} /></span></a>
      <div className="project-info"><div><span className="project-category">{model.category}</span><h3><a href={`/modelos/${model.slug}`}>{model.name}</a></h3></div><a className="project-arrow" href={`/modelos/${model.slug}`} aria-label={`Abrir ${model.name}`}><ArrowUpRight size={21} /></a></div>
      <div className="project-tags">{model.tags.map(tag => <span key={tag}>{tag}</span>)}<span className="responsive-tag"><Smartphone size={12} /> Responsivo</span></div>
    </article>)}</div>
    {category === 'Todos' && <div className="gallery-more"><button className="button button-outline" onClick={() => setExpanded(!expanded)}>{expanded ? 'Mostrar menos modelos' : 'Explore os 12 modelos'}{expanded ? <Minus size={17} /> : <Plus size={17} />}</button></div>}
    <p className="demo-note">Projetos conceituais e marcas fictícias, criados para inspirar o seu próximo site.</p>
  </div></section>
}
function Benefits() {
  return <section className="benefits-section section-pad" id="diferenciais"><div className="container">
    <div className="section-top reveal"><div><span className="section-label"><span /> BONITO É SÓ O COMEÇO</span><h2>Uma boa primeira impressão.<br /><em>Em qualquer tela.</em></h2></div><p>Design com intenção, navegação simples<br />e atenção aos detalhes. Seu site precisa<br className="desktop-break" /> trabalhar tão bem quanto você.</p></div>
    <div className="bento-grid"><article className="bento-mobile reveal"><div className="bento-icon"><Smartphone size={22} /></div><h3>Do computador<br />para a palma da mão.</h3><p>Uma experiência que se adapta.<br />Sem apertar os olhos. Sem complicar.</p><div className="responsive-composition"><div className="bento-desktop"><ModelPreview model={models[4]} /></div><div className="bento-phone"><div className="phone-camera" /><b>ÁTRIA</b><strong>Espaços para<br />viver bem.</strong><Photo model={models[4]} small /><span>Explore os projetos ↗</span></div><span className="device-label"><Monitor size={14} /> Desktop <span /> <Smartphone size={14} /> Mobile</span></div></article>
      <article className="bento-personality reveal"><div className="bento-icon"><Palette size={22} /></div><h3>Com a sua essência.<br />Em cada detalhe.</h3><p>Cores, tipografia e conteúdo que<br />conversam com o seu público.</p><div className="palette-art" aria-hidden="true"><div className="palette-sheet"><small>SUA IDENTIDADE</small><span>Aa<span>Aa</span></span><div className="swatches"><i /><i /><i /><i /></div></div><span className="palette-tag"><MousePointer2 size={15} fill="currentColor" /> Sua marca aqui</span></div></article>
      <article className="bento-speed reveal"><div className="bento-icon"><Zap size={22} /></div><div><h3>Leve, fluido.<br />Pronto para encantar.</h3><p>Imagens otimizadas e animações sutis<br />para uma navegação agradável.</p></div><div className="speed-art" aria-hidden="true"><span /><span /><span /><span /><span /><span /><Zap size={24} /></div></article>
      <article className="bento-contact reveal"><div className="bento-icon"><MousePointer2 size={22} /></div><h3>O próximo passo<br />sempre à vista.</h3><p>Serviços claros e caminhos simples<br />para conhecer o seu negócio.</p><span className="sample-cta">Vamos conversar <ArrowUpRight size={19} /></span></article>
    </div>
  </div></section>
}
function Process() {
  const steps = [['A gente se conhece.', 'Você conta sobre o seu negócio, o seu público e o que imagina para o site.'], ['Seu estilo ganha forma.', 'Escolhemos uma direção e personalizamos as cores, as imagens e cada palavra.'], ['Tudo pronto para aparecer.', 'Revisamos juntos os detalhes e preparamos o site para receber seus visitantes.']]
  return <section className="process-section section-pad" id="processo"><div className="container"><div className="process-heading reveal"><span className="section-label"><span /> SIMPLES, DO INÍCIO AO SITE</span><h2>Sua ideia, no ar.<br /><em>Sem complicação.</em></h2><p>Você participa de cada etapa.<br />A parte técnica fica com a gente.</p><a className="text-link" href="#contato">Vamos dar o primeiro passo <ArrowUpRight size={18} /></a></div><div className="process-steps">{steps.map(([title, text], index) => <article className="process-step reveal" key={title}><span className="step-number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight size={23} /></article>)}</div></div></section>
}
function FAQ({ items = faqs }) {
  const [open, setOpen] = useState(null)
  return <div className="faq-list">{items.map(([question, answer], index) => <div className={`faq-item ${open === index ? 'is-open' : ''}`} key={question}><h3><button aria-expanded={open === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpen(open === index ? null : index)}>{question}{open === index ? <Minus size={19} /> : <Plus size={19} />}</button></h3><div id={`faq-answer-${index}`} hidden={open !== index}><p>{answer}</p></div></div>)}</div>
}
function BriefingForm() {
  const [summary, setSummary] = useState('')
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const [selected, setSelected] = useState('')
  const resultRef = useRef(null)
  useEffect(() => { setSelected(new URLSearchParams(window.location.search).get('modelo') || '') }, [])
  useEffect(() => { if (summary) resultRef.current?.focus() }, [summary])
  function submit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    setSummary(`MEU PROJETO — SITESPRIME\n\nNome: ${data.get('nome').trim()}\nNegócio: ${data.get('negocio').trim()}\nModelo de referência: ${data.get('modelo') || 'Quero uma criação sob medida'}\n\nO que preciso:\n${data.get('objetivo').trim() || 'Gostaria de conversar sobre as possibilidades para meu negócio.'}\n\nEste é um resumo local do projeto. Nenhuma solicitação foi enviada.`)
    setCopied(false); setCopyError(false)
  }
  async function copy() {
    try { await navigator.clipboard.writeText(summary); setCopied(true); setCopyError(false) } catch { setCopyError(true); resultRef.current?.select() }
  }
  function download() {
    const url = URL.createObjectURL(new Blob([summary], { type: 'text/plain;charset=utf-8' }))
    const anchor = document.createElement('a')
    anchor.href = url; anchor.download = 'meu-projeto-sitesprime.txt'; document.body.appendChild(anchor); anchor.click(); anchor.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000)
  }
  return <div className="briefing-panel"><div className="briefing-heading"><span className="section-label">UM BOM PROJETO COMEÇA COM UMA CONVERSA</span><h3>Conte um pouco sobre sua ideia.</h3></div><form onSubmit={submit}><div className="form-row"><label>Seu nome<input name="nome" autoComplete="name" placeholder="Como podemos te chamar?" required maxLength={100} pattern=".*\S.*" /></label><label>Seu negócio<input name="negocio" autoComplete="organization" placeholder="Nome da empresa ou profissão" required maxLength={150} pattern=".*\S.*" /></label></div><label>Qual modelo chamou sua atenção?<select name="modelo" value={selected} onChange={event => setSelected(event.target.value)}><option value="">Quero uma criação sob medida</option>{models.map(model => <option key={model.slug} value={model.name}>{model.name} — {model.profession}</option>)}</select></label><label>O que você imagina para o site?<textarea name="objetivo" rows={3} placeholder="Conte seus serviços, o estilo que gosta e o que não pode faltar…" maxLength={2500} /></label><button className="button button-dark" type="submit">Preparar meu projeto <ArrowUpRight size={18} /></button><p className="form-privacy"><ShieldCheck size={14} /> Seus dados ficam apenas nesta página. Nada é enviado.</p></form>
    {summary && <div className="briefing-result"><h4><CheckCheck size={19} /> Seu resumo está pronto!</h4><p>Copie ou baixe para compartilhar quando for solicitar sua proposta. Nenhuma mensagem foi enviada.</p><textarea ref={resultRef} readOnly value={summary} rows={7} aria-label="Resumo do seu projeto" /><div className="result-actions"><button className="button button-dark" onClick={copy}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? 'Copiado!' : 'Copiar resumo'}</button><button className="button button-outline" onClick={download}><Download size={16} /> Baixar</button></div><span role="status">{copyError ? 'A cópia automática não está disponível. Selecione o texto ou use “Baixar”.' : copied ? 'Resumo copiado para a área de transferência.' : ''}</span></div>}
  </div>
}
function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-top"><a href="/" aria-label="SitesPrime — início"><Brand /></a><span>Seu negócio merece ser visto.</span><a href="#inicio" className="back-top">De volta ao topo <MoveUpRight size={16} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} SitesPrime. Design com propósito.</span><span>Feito com atenção a cada detalhe <Heart size={12} /></span></div></div></footer>
}
function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } }), { threshold: 0.08 })
    document.querySelectorAll('.reveal').forEach(element => { element.classList.add('will-reveal'); observer.observe(element) })
    return () => { observer.disconnect(); document.querySelectorAll('.will-reveal').forEach(element => element.classList.remove('will-reveal')) }
  }, [])
}
function Home() {
  useReveal()
  return <><a href="#conteudo" className="skip-link">Pular para o conteúdo</a><Header /><main id="conteudo"><Hero />
    <div className="profession-strip"><div className="container"><span>PARA QUEM FAZ<br /><b>A DIFERENÇA.</b></span><div><Smile size={19} /> Dentistas</div><div><ShieldCheck size={19} /> Advogados</div><div><MapPin size={19} /> Corretores</div><div><Leaf size={19} /> Terapeutas</div><div><Layers3 size={19} /> E para você.</div></div></div>
    <Gallery /><Benefits /><Process />
    <section className="faq-section section-pad"><div className="container faq-grid"><div className="reveal"><span className="section-label"><span /> PODE PERGUNTAR</span><h2>Vamos deixar<br />tudo <em>claro.</em></h2><p>Algumas respostas antes<br />do nosso primeiro papo.</p></div><FAQ /></div></section>
    <section className="contact-section" id="contato"><div className="container"><div className="contact-callout reveal"><span className="eyebrow"><span className="status-dot" /> O PRÓXIMO PROJETO PODE SER O SEU</span><h2>Seu negócio é único.<br />Seu site também <em>pode ser.</em></h2><p>Vamos transformar o que você faz em algo que as pessoas vão querer conhecer.</p><a className="button button-dark" href="#seu-projeto">Vamos tirar a ideia do papel <ArrowUpRight size={20} /></a><span className="contact-spark spark-one" aria-hidden="true">✳</span><span className="contact-spark spark-two" aria-hidden="true">✳</span></div><div id="seu-projeto"><BriefingForm /></div></div></section>
  </main><Footer /></>
}
function DemoPage({ model }) {
  const Icon = iconMap[model.theme] || Sparkles
  const related = models.filter(item => item.slug !== model.slug).slice(0, 3)
  return <div className={`demo-page theme-${model.theme}`} id="inicio"><a className="skip-link" href="#demo-conteudo">Pular para o conteúdo</a><div className="demo-toolbar"><a href="/#modelos"><ArrowLeft size={16} /><span>Todos os modelos</span></a><span className="demo-label">MODELO DEMONSTRATIVO <i /> {model.profession}</span><a className="demo-pick" href={`/?modelo=${encodeURIComponent(model.name)}#contato`}>Quero um site assim <ArrowUpRight size={16} /></a></div>
    <header className="demo-header container"><a className="demo-brand" href="#inicio">{model.brand}</a><nav aria-label="Navegação do modelo"><a href="#sobre">Sobre</a><a href="#servicos">{model.theme === 'property' ? 'Imóveis' : ['architecture', 'photography'].includes(model.theme) ? 'Portfólio' : 'Serviços'}</a><a href="#duvidas">Dúvidas</a></nav><a className="demo-button" href="#demo-contato">Vamos conversar <ArrowUpRight size={16} /></a></header>
    <main id="demo-conteudo"><section className="demo-hero"><div className="container demo-hero-grid"><div className="demo-hero-copy"><span className="demo-kicker">{model.kicker}</span><h1>{model.headline}</h1><p>{model.description}</p><a className="demo-button" href="#servicos">{model.cta}<ArrowUpRight size={18} /></a><span className="demo-hero-footnote"><Icon size={16} /> Uma experiência pensada em cada detalhe.</span></div><div className="demo-hero-photo"><Photo model={model} eager /><span className="demo-photo-caption">{model.brand}<ArrowUpRight size={22} /></span></div></div></section>
      <div className="demo-values"><div className="container"><span><Icon size={18} /> Atendimento próximo</span><span><Check size={18} /> Atenção aos detalhes</span><span><Heart size={18} /> Feito para você</span></div></div>
      <section className="demo-services section-pad container" id="servicos"><div className="section-top"><div><span className="demo-kicker">{model.theme === 'property' ? 'UMA SELEÇÃO PARA INSPIRAR' : 'DESCUBRA AS POSSIBILIDADES'}</span><h2>{model.theme === 'property' ? 'Lugares para começar uma nova história.' : model.theme === 'architecture' ? 'Projetos com a sua essência.' : model.theme === 'photography' ? 'Um olhar. Muitas histórias.' : 'O cuidado está em cada escolha.'}</h2></div><p>Conheça um pouco do que<br />você pode encontrar por aqui.</p></div><div className="demo-service-grid">{model.services.map(([title, description], index) => <article key={title}>{['property', 'architecture', 'photography'].includes(model.theme) && <Photo model={index === 0 ? model : models[index === 1 ? 4 : 2]} small />}<div><span className="demo-service-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p><a href="#demo-contato">Saiba mais <ArrowUpRight size={16} /></a></div></article>)}</div></section>
      <section className="demo-about section-pad" id="sobre"><div className="container"><div className="demo-about-image"><Photo model={model} /><span><Icon size={24} /> {model.brand}</span></div><div><span className="demo-kicker">NOSSO JEITO DE FAZER</span><h2>{model.detail}</h2><p>{model.about}</p><a className="demo-button" href="#demo-contato">Vamos nos conhecer <ArrowUpRight size={18} /></a></div></div></section>
      <section className="demo-faq section-pad container" id="duvidas"><div><span className="demo-kicker">ANTES DA NOSSA CONVERSA</span><h2>O que você<br />gostaria de saber?</h2></div><FAQ items={[[`Como conhecer melhor ${model.name}?`, 'Este site é um modelo demonstrativo da SitesPrime, com marca, serviços e conteúdo ilustrativos. Use “Quero um site assim” para preparar um projeto com a identidade do seu negócio.'], ['Posso personalizar este modelo?', 'Sim. A identidade visual, as fotografias, os textos, os serviços e as formas de contato são adaptados ao profissional ou à empresa.'], ['Este site realiza agendamentos ou contratações?', 'Não. Este exemplo apresenta o visual e a estrutura do site. Não há atendimento, imóveis à venda, contratação ou envio de dados neste modelo.']]} /></section>
      <section className="demo-contact section-pad" id="demo-contato"><div className="container"><Icon size={32} /><span className="demo-kicker">GOSTOU DESTE ESTILO?</span><h2>Imagine esta experiência<br />com a sua marca.</h2><p>Este é um projeto fictício. Vamos usar essa inspiração<br />para criar um site que seja só seu?</p><a className="demo-button" href={`/?modelo=${encodeURIComponent(model.name)}#contato`}>Quero personalizar este modelo <ArrowUpRight size={18} /></a><small>Modelo demonstrativo • Não realiza atendimentos ou reservas</small></div></section>
      <section className="related-section container"><div><span className="section-label">CONTINUE SE INSPIRANDO</span><h2>Outros jeitos de aparecer.</h2></div><div className="related-grid">{related.map(item => <a key={item.slug} href={`/modelos/${item.slug}`}><Photo model={item} small /><span>{item.name}<ArrowUpRight size={20} /></span></a>)}</div></section>
    </main><footer className="demo-footer container"><a href="/"><Brand /></a><span>Um conceito de site para {model.profession.toLowerCase()}.</span><a href="/#modelos">Explorar todos os modelos <ArrowUpRight size={16} /></a></footer></div>
}
function NotFound() { return <div className="not-found"><Brand /><span>404</span><h1>Esse endereço ainda<br />não virou um site.</h1><p>Mas o seu próximo modelo está logo ali.</p><a className="button button-dark" href="/#modelos">Conhecer os modelos <ArrowRight size={18} /></a></div> }
export default function App({ path = typeof window === 'undefined' ? '/' : window.location.pathname }) {
  const normalized = path.replace(/\/$/, '') || '/'
  const slug = normalized.startsWith('/modelos/') ? normalized.slice(9) : ''
  const model = findModel(legacySlugs[slug] || slug)
  if (model) return <DemoPage model={model} />
  if (normalized !== '/') return <NotFound />
  return <Home />
}

