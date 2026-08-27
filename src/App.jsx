import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronRight,
  Code2,
  Gauge,
  Globe2,
  LayoutTemplate,
  MessageCircle,
  MonitorSmartphone,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react'

const segments = [
  'Clínicas',
  'Escritórios',
  'Imobiliárias',
  'Restaurantes',
  'Consultores',
  'Lojas',
  'Prestadores de serviço',
  'Empresas locais',
]

const benefits = [
  {
    icon: Target,
    title: 'Pensado para converter',
    text: 'Estrutura clara, chamadas estratégicas e uma jornada que conduz o visitante até o contato.',
  },
  {
    icon: MonitorSmartphone,
    title: '100% responsivo',
    text: 'Seu site funciona com acabamento profissional no celular, tablet e computador.',
  },
  {
    icon: Gauge,
    title: 'Rápido de verdade',
    text: 'Código enxuto, boas práticas e foco em desempenho para não perder oportunidades por lentidão.',
  },
  {
    icon: Search,
    title: 'Preparado para o Google',
    text: 'Base técnica com SEO, títulos, descrição e estrutura pronta para receber tráfego de pesquisa.',
  },
  {
    icon: LayoutTemplate,
    title: 'Design sob medida',
    text: 'Nada de aparência genérica. O visual é criado para combinar com o posicionamento do seu negócio.',
  },
  {
    icon: ShieldCheck,
    title: 'Presença profissional',
    text: 'Uma apresentação que transmite confiança antes mesmo do primeiro atendimento.',
  },
]

const steps = [
  ['01', 'Entendo o seu negócio', 'Objetivo, público, oferta, diferenciais e o que o site precisa gerar para você.'],
  ['02', 'Crio a estratégia da página', 'Organizo a mensagem, hierarquia, seções e chamadas para ação com foco em conversão.'],
  ['03', 'Desenvolvo o site', 'Design, responsividade, performance e acabamento profissional em todos os dispositivos.'],
  ['04', 'Você recebe pronto para vender', 'O site fica preparado para divulgar, anunciar e transformar visitantes em oportunidades.'],
]

function scrollToContact() {
  document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function BrowserMockup() {
  return (
    <div className="browser-shell reveal delay-2" aria-label="Exemplo visual de um site profissional">
      <div className="browser-glow" />
      <div className="browser-topbar">
        <div className="browser-dots"><span /><span /><span /></div>
        <div className="browser-address">seunegocio.com.br</div>
      </div>
      <div className="browser-body">
        <div className="mock-nav">
          <div className="mock-logo">S</div>
          <div className="mock-lines"><i /><i /><i /></div>
          <span className="mock-pill" />
        </div>
        <div className="mock-hero">
          <div>
            <span className="mock-eyebrow" />
            <span className="mock-title wide" />
            <span className="mock-title" />
            <span className="mock-copy" />
            <span className="mock-copy short" />
            <div className="mock-actions"><b /><em /></div>
          </div>
          <div className="mock-visual">
            <div className="float-card card-a"><BarChart3 size={18} /><strong>+ oportunidades</strong></div>
            <div className="float-card card-b"><BadgeCheck size={18} /><strong>mais confiança</strong></div>
            <div className="visual-core"><Globe2 size={52} /></div>
          </div>
        </div>
        <div className="mock-cards"><span /><span /><span /></div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Início">
          <span className="brand-mark">S</span>
          <span>Sites<span className="brand-accent">Pro</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#beneficios">Benefícios</a>
          <a href="#processo">Como funciona</a>
          <a href="#para-quem">Para quem é</a>
        </nav>
        <button className="header-cta" onClick={scrollToContact}>Quero meu site <ArrowRight size={17} /></button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="aurora aurora-one" />
          <div className="aurora aurora-two" />
          <div className="grid-noise" />
          <div className="hero-content container">
            <div className="hero-copy">
              <div className="eyebrow reveal"><Sparkles size={15} /> Seu negócio merece mais do que “só um site”</div>
              <h1 className="reveal delay-1">
                Transforme sua presença online em uma <span>máquina de gerar oportunidades.</span>
              </h1>
              <p className="hero-subtitle reveal delay-2">
                Eu crio sites profissionais, rápidos e estratégicos para empresas e profissionais que querem transmitir confiança, aparecer melhor e vender mais.
              </p>
              <div className="hero-actions reveal delay-3">
                <button className="primary-cta shimmer" onClick={scrollToContact}>
                  Quero um site profissional <ArrowRight size={19} />
                </button>
                <a className="secondary-cta" href="#beneficios">Ver como funciona <ChevronRight size={18} /></a>
              </div>
              <div className="trust-row reveal delay-3">
                <span><Check size={16} /> Design profissional</span>
                <span><Check size={16} /> Mobile impecável</span>
                <span><Check size={16} /> Pronto para anunciar</span>
              </div>
            </div>
            <BrowserMockup />
          </div>
        </section>

        <section className="segment-strip" aria-label="Segmentos atendidos">
          <div className="marquee-track">
            {[...segments, ...segments].map((item, index) => (
              <span key={`${item}-${index}`}><Sparkles size={13} /> {item}</span>
            ))}
          </div>
        </section>

        <section className="problem-section container">
          <div className="section-label">O problema não é ter um site</div>
          <div className="problem-grid">
            <div>
              <h2>É ter um site que <span>não convence ninguém.</span></h2>
              <p>Quando o visitante entra e encontra uma página lenta, confusa ou com aparência amadora, a primeira impressão trabalha contra você.</p>
            </div>
            <div className="comparison-card">
              <div className="comparison bad">
                <span className="comparison-icon">×</span>
                <div><strong>Site que só existe</strong><p>Bonito por fora, mas sem direção, estratégia ou foco em contato.</p></div>
              </div>
              <div className="comparison good">
                <span className="comparison-icon"><Check size={20} /></span>
                <div><strong>Site que trabalha por você</strong><p>Mensagem clara, visual forte, velocidade e chamadas que conduzem para a ação.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits-section" id="beneficios">
          <div className="container">
            <div className="section-heading center">
              <div className="section-label">Seu site precisa fazer mais</div>
              <h2>Não é apenas design. É <span>estratégia + tecnologia + conversão.</span></h2>
              <p>Cada detalhe é pensado para valorizar o seu negócio e facilitar o próximo passo do cliente.</p>
            </div>
            <div className="benefits-grid">
              {benefits.map(({ icon: Icon, title, text }) => (
                <article className="benefit-card" key={title}>
                  <div className="icon-wrap"><Icon size={23} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="card-line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="showcase-section container">
          <div className="showcase-card">
            <div className="showcase-copy">
              <div className="section-label light">Feito para causar a impressão certa</div>
              <h2>Seu cliente decide em segundos se sua empresa parece profissional.</h2>
              <p>Eu cuido da experiência completa: estrutura, mensagem, visual, responsividade e performance para a sua marca chegar com mais força.</p>
              <button className="white-cta" onClick={scrollToContact}>Quero melhorar minha presença online <ArrowRight size={18} /></button>
            </div>
            <div className="showcase-stack">
              <div className="device desktop-device">
                <div className="device-bar"><i /><i /><i /></div>
                <div className="device-screen">
                  <span className="screen-nav" />
                  <span className="screen-heading" />
                  <span className="screen-heading short" />
                  <span className="screen-text" />
                  <span className="screen-button" />
                  <div className="screen-grid"><b /><b /><b /></div>
                </div>
              </div>
              <div className="device phone-device">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <span className="screen-nav" />
                  <span className="screen-heading" />
                  <span className="screen-heading short" />
                  <span className="screen-text" />
                  <span className="screen-button" />
                  <b className="phone-card" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="process-section" id="processo">
          <div className="container">
            <div className="section-heading">
              <div className="section-label">Do zero ao site no ar</div>
              <h2>Um processo simples para você ter um site <span>com objetivo.</span></h2>
            </div>
            <div className="steps-grid">
              {steps.map(([number, title, text]) => (
                <article className="step-card" key={number}>
                  <span className="step-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="audience-section container" id="para-quem">
          <div className="audience-copy">
            <div className="section-label">Para todo tipo de negócio</div>
            <h2>Se o seu cliente pesquisa, compara ou precisa confiar em você, <span>um bom site faz diferença.</span></h2>
            <p>Atendo empresas, profissionais autônomos, negócios locais, prestadores de serviço e projetos que precisam de uma presença digital mais forte.</p>
          </div>
          <div className="audience-cloud">
            {segments.map((segment, index) => <span style={{ '--i': index }} key={segment}>{segment}</span>)}
          </div>
        </section>

        <section className="quality-section">
          <div className="container quality-grid">
            <div className="quality-visual">
              <div className="code-window">
                <div className="code-head"><span /><span /><span /><em>performance.ts</em></div>
                <pre><code>{`const seuSite = {\n  visual: "profissional",\n  mobile: "impecável",\n  velocidade: "alta",\n  objetivo: "converter"\n}`}</code></pre>
                <div className="code-status"><Zap size={16} /> Projeto pronto para crescer</div>
              </div>
            </div>
            <div className="quality-copy">
              <div className="section-label">Profissional por dentro e por fora</div>
              <h2>Bonito para o cliente. <span>Bem construído para o Google.</span></h2>
              <ul>
                <li><Check size={18} /> Estrutura semântica e SEO técnico inicial</li>
                <li><Check size={18} /> Experiência mobile pensada desde o início</li>
                <li><Check size={18} /> Animações leves, sem sacrificar desempenho</li>
                <li><Check size={18} /> Base preparada para tags e campanhas</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="final-cta container" id="contato">
          <div className="final-cta-card">
            <div className="cta-orb" />
            <div className="cta-icon"><MessageCircle size={26} /></div>
            <h2>Seu próximo cliente pode estar pesquisando por você <span>agora.</span></h2>
            <p>Faça sua empresa parecer tão profissional online quanto ela é no dia a dia. Vamos criar um site pensado para apresentar, convencer e gerar oportunidades.</p>
            <button className="primary-cta shimmer" onClick={() => alert('Adicione o seu número de WhatsApp para ativar este botão de contato.')}>
              Pedir meu orçamento <ArrowRight size={19} />
            </button>
            <small>Atendimento direto • Projeto personalizado • Site responsivo</small>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <a className="brand" href="#inicio"><span className="brand-mark">S</span><span>Sites<span className="brand-accent">Pro</span></span></a>
          <p>Sites profissionais para negócios que querem crescer.</p>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  )
}

export default App
