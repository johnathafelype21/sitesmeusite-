import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronRight,
  Code2,
  Gauge,
  Globe2,
  Layers3,
  MessageCircle,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  WandSparkles,
  Zap,
} from 'lucide-react'

const FALLBACK_IMAGE = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
      <stop stop-color="#0b1830"/><stop offset="1" stop-color="#1f6fb2"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#g)"/>
  <circle cx="930" cy="170" r="190" fill="#68c6ff" opacity=".13"/>
  <circle cx="230" cy="680" r="240" fill="#ffffff" opacity=".06"/>
  <rect x="140" y="150" width="920" height="500" rx="36" fill="#ffffff" opacity=".07"/>
  <rect x="205" y="235" width="420" height="34" rx="17" fill="#fff" opacity=".84"/>
  <rect x="205" y="300" width="560" height="18" rx="9" fill="#fff" opacity=".42"/>
  <rect x="205" y="345" width="480" height="18" rx="9" fill="#fff" opacity=".28"/>
  <rect x="205" y="425" width="170" height="54" rx="14" fill="#7fd2ff" opacity=".92"/>
  <rect x="705" y="230" width="280" height="300" rx="24" fill="#fff" opacity=".12"/>
</svg>`)} `

function SafeImage({ src, alt, ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      {...props}
      onError={(event) => {
        event.currentTarget.onerror = null
        event.currentTarget.src = FALLBACK_IMAGE
      }}
    />
  )
}

const models = [
  {
    name: 'Albuquerque & Rocha Advocacia',
    category: 'Advocacia',
    description: 'Modelo completo para escritório jurídico com áreas de atuação, equipe, autoridade, conteúdo e agendamento.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=82',
    tags: ['Áreas de atuação', 'Equipe', 'Agendamento'],
  },
  {
    name: 'Essência Terapias Integradas',
    category: 'Terapeuta',
    description: 'Experiência acolhedora com apresentação profissional, método, benefícios, dúvidas e chamada para atendimento.',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=1600&q=82',
    tags: ['Acolhimento', 'Sessões', 'FAQ'],
  },
  {
    name: 'Prime Urban Imóveis',
    category: 'Corretor / Imobiliária',
    description: 'Vitrine imobiliária sofisticada com destaques, lançamentos, filtros, consultoria e captação de leads.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=82',
    tags: ['Imóveis', 'Lançamentos', 'WhatsApp'],
  },
  {
    name: 'Ink Prime Studio',
    category: 'Tatuador',
    description: 'Modelo escuro e premium com estilos de tatuagem, artistas, galeria, depoimentos e agendamento.',
    image: 'https://images.unsplash.com/photo-1590246814883-57c511381c04?auto=format&fit=crop&w=1600&q=82',
    tags: ['Galeria', 'Artistas', 'Agenda'],
  },
  {
    name: 'Ateliê Lumière Hair',
    category: 'Cabeleireiro / Salão',
    description: 'Site elegante com serviços, profissionais, transformações, avaliações, Instagram e reservas.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=82',
    tags: ['Serviços', 'Antes e depois', 'Reserva'],
  },
  {
    name: 'Clínica Oralis',
    category: 'Dentista',
    description: 'Modelo de clínica odontológica com tratamentos, equipe, estrutura, avaliações, FAQ e consulta.',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1600&q=82',
    tags: ['Tratamentos', 'Dentistas', 'Consulta'],
  },
  {
    name: 'Brasa Nobre',
    category: 'Restaurante',
    description: 'Página gastronômica completa com cardápio, chef, reservas, avaliações, galeria e localização.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=82',
    tags: ['Cardápio', 'Reservas', 'Localização'],
  },
  {
    name: 'Forge Fitness Club',
    category: 'Academia',
    description: 'Modelo de alta energia com planos, modalidades, treinadores, resultados e matrícula.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=82',
    tags: ['Planos', 'Aulas', 'Matrícula'],
  },
  {
    name: 'PetCare Vida',
    category: 'Pet Shop / Veterinária',
    description: 'Estrutura amigável com consultas, vacinas, pet shop, equipe, produtos, dicas e agendamento.',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1600&q=82',
    tags: ['Veterinária', 'Pet shop', 'Agenda'],
  },
  {
    name: 'Studio Atria Arquitetura',
    category: 'Arquitetura',
    description: 'Portfólio minimalista para projetos residenciais e interiores, com processo, serviços e consulta.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=82',
    tags: ['Projetos', 'Interiores', 'Portfólio'],
  },
  {
    name: 'Melo Studio Fotografia',
    category: 'Fotógrafo',
    description: 'Modelo editorial com portfólio por categoria, pacotes, depoimentos, apresentação e reservas.',
    image: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1600&q=82',
    tags: ['Portfólio', 'Pacotes', 'Ensaios'],
  },
  {
    name: 'Nova Gestão Contábil',
    category: 'Contabilidade',
    description: 'Site corporativo para escritório contábil com serviços, abertura de empresa, consultoria e atendimento.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=82',
    tags: ['Contábil', 'Empresas', 'Consultoria'],
  },
]

const benefits = [
  { icon: Target, title: 'Pensado para converter', text: 'Estrutura clara, chamadas estratégicas e uma jornada que conduz o visitante até o contato.' },
  { icon: MonitorSmartphone, title: '100% responsivo', text: 'Cada seção é reorganizada para celular, tablet e computador sem cortar conteúdo.' },
  { icon: Gauge, title: 'Rápido de verdade', text: 'Base enxuta e tratamento de imagens para não perder oportunidades por lentidão.' },
  { icon: Search, title: 'Preparado para o Google', text: 'Estrutura técnica pronta para SEO, tags, campanhas e evolução do projeto.' },
  { icon: WandSparkles, title: 'Design por segmento', text: 'Cada modelo tem linguagem visual própria. Não é só trocar nome e cor.' },
  { icon: ShieldCheck, title: 'Sem imagem quebrada', text: 'Toda imagem possui fallback visual automático para nunca deixar um ícone de erro na tela.' },
]

const steps = [
  ['01', 'Escolha o estilo', 'Você escolhe um modelo ou usa um deles apenas como referência visual.'],
  ['02', 'Personalização', 'Trocamos nome, cores, textos, fotos, serviços, contatos e estrutura para o negócio real.'],
  ['03', 'Desenvolvimento', 'O site é ajustado com responsividade, performance, SEO e integrações necessárias.'],
  ['04', 'Publicação', 'Depois da revisão final, o projeto fica pronto para domínio, anúncios e atendimento.'],
]

const sectors = ['Advocacia', 'Terapia', 'Imobiliário', 'Tatuagem', 'Salão de beleza', 'Odontologia', 'Restaurantes', 'Academias', 'Pet shops', 'Arquitetura', 'Fotografia', 'Contabilidade']

function scrollToContact() {
  document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand-placeholder" href="#inicio" aria-label="Espaço reservado para sua logomarca" />
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#modelos">Modelos</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#processo">Processo</a>
        </nav>
        <button className="header-cta" onClick={scrollToContact}>Pedir orçamento <ArrowRight size={17} /></button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={15} /> Sites profissionais para empresas e autônomos</div>
              <h1>Escolha uma base profissional. <span>Depois deixamos com a cara do seu negócio.</span></h1>
              <p className="hero-subtitle">Modelos completos, modernos e responsivos para diferentes segmentos. Cada projeto pode ser totalmente personalizado para sua marca, serviços e público.</p>
              <div className="hero-actions">
                <a className="primary-cta" href="#modelos">Ver modelos <ArrowRight size={19} /></a>
                <button className="secondary-cta" onClick={scrollToContact}>Quero meu site <ChevronRight size={18} /></button>
              </div>
              <div className="trust-row">
                <span><Check size={16} /> Mobile revisado</span>
                <span><Check size={16} /> Imagens com fallback</span>
                <span><Check size={16} /> Estrutura completa</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-photo-wrap">
                <SafeImage className="hero-photo" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=82" alt="Ambiente profissional moderno" />
                <div className="hero-photo-shade" />
                <div className="hero-browser">
                  <div className="mini-browser-head"><i /><i /><i /><span>seunegocio.com.br</span></div>
                  <div className="mini-browser-body">
                    <div className="mini-copy"><small>MODELO PERSONALIZÁVEL</small><strong>Visual profissional para qualquer segmento.</strong><p>Desktop e mobile pensados juntos.</p><b>Solicitar orçamento</b></div>
                    <div className="mini-stat"><TrendingUp size={18} /><span>Estrutura preparada para gerar oportunidades</span></div>
                  </div>
                </div>
              </div>
              <div className="floating-proof proof-one"><BadgeCheck size={18} /><span><strong>12 modelos iniciais</strong>Todos fictícios</span></div>
              <div className="floating-proof proof-two"><Zap size={18} /><span><strong>Responsivo</strong>Desktop + mobile</span></div>
            </div>
          </div>
        </section>

        <section className="proof-strip">
          <div className="container proof-strip-grid">
            <div><strong>12 modelos</strong><span>segmentos diferentes</span></div>
            <div><strong>100% fictícios</strong><span>sem usar clientes reais</span></div>
            <div><strong>Mobile primeiro</strong><span>sem cortes de conteúdo</span></div>
            <div><strong>Fallback de imagem</strong><span>nada de imagem quebrada</span></div>
          </div>
        </section>

        <section className="portfolio-section" id="modelos">
          <div className="container">
            <div className="section-heading portfolio-heading">
              <div><div className="section-label">Modelos de sites</div><h2>Escolha pelo seu segmento <span>ou apenas pelo estilo visual.</span></h2></div>
              <p>Todos os exemplos abaixo são fictícios e representam estruturas completas que podem ser personalizadas para um negócio real.</p>
            </div>

            <div className="portfolio-grid">
              {models.map((project, index) => (
                <article className={`project-card project-${index + 1}`} key={project.name}>
                  <div className="project-image-wrap">
                    <SafeImage src={project.image} alt={`Modelo fictício ${project.name}`} loading="lazy" />
                    <div className="project-image-overlay" />
                    <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                    <div className="project-device">
                      <span className="project-device-top"><i /><i /><i /></span>
                      <div className="project-device-screen"><span className="project-mini-nav" /><span className="project-mini-title" /><span className="project-mini-title short" /><span className="project-mini-copy" /><span className="project-mini-button" /></div>
                    </div>
                  </div>
                  <div className="project-copy">
                    <span className="project-category">{project.category} • Modelo fictício</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="credibility-section">
          <div className="container credibility-grid">
            <div className="credibility-photo">
              <SafeImage src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=82" alt="Equipe profissional em reunião" loading="lazy" />
              <div className="credibility-card"><BadgeCheck size={22} /><div><strong>Modelo é só o ponto de partida</strong><span>A versão final fica personalizada para cada negócio.</span></div></div>
            </div>
            <div className="credibility-copy">
              <div className="section-label">Não é template genérico</div>
              <h2>Cada negócio recebe <span>conteúdo, fotos e organização próprios.</span></h2>
              <p>Os modelos ajudam a visualizar possibilidades. Na personalização, identidade, textos, serviços, chamadas e estrutura são ajustados para o objetivo real da empresa.</p>
              <div className="credibility-list">
                <div><span><Building2 size={19} /></span><p><strong>Identidade do negócio</strong>Cores, linguagem e posicionamento coerentes com o segmento.</p></div>
                <div><span><Layers3 size={19} /></span><p><strong>Seções completas</strong>Serviços, equipe, avaliações, FAQ, galeria, contato e CTAs quando fizer sentido.</p></div>
                <div><span><MessageCircle size={19} /></span><p><strong>Conversão</strong>WhatsApp, formulários, agendamento ou orçamento conforme a necessidade.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits-section" id="beneficios">
          <div className="container">
            <div className="section-heading center"><div className="section-label">Padrão de entrega</div><h2>Bonito no desktop. <span>Correto no celular.</span></h2><p>Não adianta um modelo bonito se quebra em telas menores. A responsividade faz parte da estrutura.</p></div>
            <div className="benefits-grid">{benefits.map(({ icon: Icon, title, text }) => <article className="benefit-card" key={title}><div className="icon-wrap"><Icon size={22} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section className="deliverables-section">
          <div className="container deliverables-grid">
            <div className="deliverables-copy"><div className="section-label light">Site completo</div><h2>Estrutura pronta para <span>apresentar, anunciar e receber contatos.</span></h2><p>O projeto pode receber tudo que o negócio realmente precisar.</p><ul><li><Check size={18} /> Design responsivo</li><li><Check size={18} /> SEO técnico inicial</li><li><Check size={18} /> WhatsApp e formulários</li><li><Check size={18} /> Google Ads e Meta Ads</li><li><Check size={18} /> Domínio e hospedagem configuráveis</li></ul><button className="white-cta" onClick={scrollToContact}>Quero um modelo personalizado <ArrowRight size={18} /></button></div>
            <div className="deliverables-visual"><div className="desktop-frame"><div className="frame-top"><i /><i /><i /><span>Versão desktop</span></div><div className="frame-screen"><span className="frame-nav" /><div className="frame-hero-row"><b /><em /></div><div className="frame-cards"><span /><span /><span /></div></div></div><div className="phone-frame"><div className="phone-notch" /><div className="phone-content"><span /><strong /><strong className="short" /><i /><b /></div></div></div>
          </div>
        </section>

        <section className="process-section" id="processo">
          <div className="container"><div className="section-heading process-heading"><div><div className="section-label">Como funciona</div><h2>Escolheu um estilo? <span>Daí começa a personalização.</span></h2></div><p>O modelo não limita o projeto. Ele serve para acelerar a escolha da direção visual.</p></div><div className="steps-grid">{steps.map(([number, title, text]) => <article className="step-card" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div>
        </section>

        <section className="sectors-section"><div className="container sectors-grid"><div><div className="section-label">Mais segmentos</div><h2>Tem negócio de todo tipo. <span>O site acompanha.</span></h2></div><div className="sector-cloud">{sectors.map(sector => <span key={sector}>{sector}</span>)}</div></div></section>

        <section className="quality-section"><div className="container quality-grid"><div className="quality-visual"><div className="code-window"><div className="code-head"><span /><span /><span /><em>responsive.config</em></div><pre><code>{`const site = {\n  imagens: "com fallback",\n  mobile: "revisado",\n  modelos: 12,\n  objetivo: "gerar contatos"\n}`}</code></pre><div className="code-status"><Code2 size={16} /> Sem depender de uma única imagem para a página funcionar</div></div></div><div className="quality-copy"><div className="section-label">Mais segurança visual</div><h2>Se uma foto falhar, <span>o layout continua bonito.</span></h2><p>As imagens agora possuem uma alternativa visual automática. Isso evita o ícone de imagem quebrada que prejudica a credibilidade do site.</p><ul><li><Check size={18} /> Fallback automático</li><li><Check size={18} /> Imagens com carregamento otimizado</li><li><Check size={18} /> Cards adaptáveis no mobile</li><li><Check size={18} /> Estrutura sem overflow lateral</li></ul></div></div></section>

        <section className="final-cta container" id="contato"><div className="final-cta-card"><div className="cta-glow" /><div className="cta-icon"><Globe2 size={27} /></div><div className="section-label light">Seu site pode começar por qualquer modelo</div><h2>Escolha um estilo e transforme em um projeto exclusivo para sua empresa.</h2><p>Nome, identidade, serviços, imagens, contatos e conteúdo serão personalizados para o negócio real.</p><button className="primary-cta final-button" onClick={() => alert('O WhatsApp oficial será conectado aqui na configuração final.')}>Solicitar orçamento <MessageCircle size={19} /></button><small>Projeto personalizado • Mobile revisado • Estrutura profissional</small></div></section>
      </main>

      <footer><div className="container footer-inner"><div className="footer-logo-slot" aria-label="Espaço reservado para sua logomarca" /><p>Sites profissionais para negócios que querem crescer.</p><span>© 2026</span></div></footer>
    </div>
  )
}

export default App
