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

const portfolio = [
  {
    name: 'AgroInvest',
    category: 'Imobiliário rural',
    description: 'Projeto com foco em propriedades, autoridade visual e captação de oportunidades.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=88',
    tags: ['Imóveis', 'Captação', 'Mobile'],
  },
  {
    name: 'Pedro Rosa',
    category: 'Mercado imobiliário',
    description: 'Presença digital pensada para apresentar lançamentos e conduzir o visitante ao atendimento.',
    image: 'https://unsplash.com/photos/WgSrVJQRjQ8/download?force=true&w=1600',
    tags: ['Landing page', 'WhatsApp', 'Conversão'],
  },
  {
    name: 'Terra Viva Capital Rural',
    category: 'Serviços financeiros',
    description: 'Site institucional com leitura clara, imagem de confiança e estrutura comercial.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=88',
    tags: ['Institucional', 'Autoridade', 'SEO'],
  },
  {
    name: 'MedicGLP',
    category: 'Página de produto',
    description: 'Experiência focada em apresentar produto, benefícios e chamada para ação com clareza.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=88',
    tags: ['Produto', 'Performance', 'Campanhas'],
  },
]

const benefits = [
  {
    icon: Target,
    title: 'Estratégia antes do layout',
    text: 'A página é organizada para explicar rápido, gerar confiança e levar o visitante para a ação certa.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Mobile de verdade',
    text: 'O celular não recebe uma versão apertada do desktop. O layout é pensado para funcionar bem em telas menores.',
  },
  {
    icon: Gauge,
    title: 'Performance',
    text: 'Estrutura leve, imagens otimizadas e boas práticas para reduzir atrito no carregamento.',
  },
  {
    icon: Search,
    title: 'Base preparada para SEO',
    text: 'Hierarquia, títulos, descrição, semântica e estrutura técnica pronta para evoluir no Google.',
  },
  {
    icon: WandSparkles,
    title: 'Visual com identidade',
    text: 'Nada de páginas copiadas mudando só a cor. Cada negócio pede uma apresentação diferente.',
  },
  {
    icon: ShieldCheck,
    title: 'Mais credibilidade',
    text: 'Projetos, serviços, provas de trabalho e conteúdo organizados para a empresa parecer profissional desde o primeiro acesso.',
  },
]

const steps = [
  ['01', 'Diagnóstico', 'Entendo o negócio, a oferta, o público e o objetivo principal do site.'],
  ['02', 'Estrutura', 'Organizo a jornada, a copy, os blocos de confiança e as chamadas para ação.'],
  ['03', 'Design + desenvolvimento', 'Crio a identidade visual da página e implemento responsividade, efeitos e performance.'],
  ['04', 'Revisão e publicação', 'Ajusto os detalhes finais e deixo o projeto pronto para receber tráfego e campanhas.'],
]

const sectors = ['Imobiliário', 'Advocacia', 'Clínicas', 'Consultoria', 'Comércio', 'Serviços', 'Infoprodutos', 'Negócios locais']

function scrollToContact() {
  document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand-placeholder" href="#inicio" aria-label="Espaço reservado para sua logomarca" />

        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#portfolio">Projetos</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#processo">Processo</a>
        </nav>

        <button className="header-cta" onClick={scrollToContact}>
          Pedir orçamento <ArrowRight size={17} />
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={15} /> Sites profissionais para negócios que querem crescer</div>
              <h1>
                Seu negócio não precisa de <em>mais um site.</em>
                <span>Precisa de uma presença que convence.</span>
              </h1>
              <p className="hero-subtitle">
                Criação de sites modernos, rápidos e estratégicos para empresas que precisam transmitir confiança, apresentar melhor seus serviços e transformar visitas em oportunidades.
              </p>

              <div className="hero-actions">
                <button className="primary-cta" onClick={scrollToContact}>
                  Quero um projeto profissional <ArrowRight size={19} />
                </button>
                <a className="secondary-cta" href="#portfolio">
                  Ver projetos <ChevronRight size={18} />
                </a>
              </div>

              <div className="trust-row">
                <span><Check size={16} /> Responsivo</span>
                <span><Check size={16} /> Preparado para campanhas</span>
                <span><Check size={16} /> Visual personalizado</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Apresentação de um projeto digital profissional">
              <div className="hero-photo-wrap">
                <img
                  className="hero-photo"
                  src="https://unsplash.com/photos/bN8ukWPMpyE/download?force=true&w=1600"
                  alt="Equipe trabalhando em um ambiente profissional"
                />
                <div className="hero-photo-shade" />
                <div className="hero-browser">
                  <div className="mini-browser-head"><i /><i /><i /><span>seunegocio.com.br</span></div>
                  <div className="mini-browser-body">
                    <div className="mini-copy">
                      <small>POSICIONAMENTO DIGITAL</small>
                      <strong>Clareza para vender melhor.</strong>
                      <p>Design, tecnologia e estratégia no mesmo projeto.</p>
                      <b>Falar com especialista</b>
                    </div>
                    <div className="mini-stat"><TrendingUp size={18} /><span>Experiência pensada para conversão</span></div>
                  </div>
                </div>
              </div>

              <div className="floating-proof proof-one"><BadgeCheck size={18} /><span><strong>Projeto sob medida</strong>Não é template repetido</span></div>
              <div className="floating-proof proof-two"><Zap size={18} /><span><strong>Rápido e responsivo</strong>Pronto para celular</span></div>
            </div>
          </div>
        </section>

        <section className="proof-strip">
          <div className="container proof-strip-grid">
            <div><strong>Projetos reais</strong><span>em diferentes segmentos</span></div>
            <div><strong>100% responsivo</strong><span>desktop, tablet e mobile</span></div>
            <div><strong>Estrutura própria</strong><span>sem aparência genérica</span></div>
            <div><strong>Pronto para tráfego</strong><span>Google e redes sociais</span></div>
          </div>
        </section>

        <section className="portfolio-section" id="portfolio">
          <div className="container">
            <div className="section-heading portfolio-heading">
              <div>
                <div className="section-label">Portfólio</div>
                <h2>Projetos com <span>cara de empresa de verdade.</span></h2>
              </div>
              <p>Em vez de mostrar dez páginas praticamente iguais, aqui cada projeto recebe imagem, linguagem e estrutura compatíveis com o segmento.</p>
            </div>

            <div className="portfolio-grid">
              {portfolio.map((project, index) => (
                <article className={`project-card project-${index + 1}`} key={project.name}>
                  <div className="project-image-wrap">
                    <img src={project.image} alt={`Projeto ${project.name}`} loading="lazy" />
                    <div className="project-image-overlay" />
                    <span className="project-index">0{index + 1}</span>
                    <div className="project-device">
                      <span className="project-device-top"><i /><i /><i /></span>
                      <div className="project-device-screen">
                        <span className="project-mini-nav" />
                        <span className="project-mini-title" />
                        <span className="project-mini-title short" />
                        <span className="project-mini-copy" />
                        <span className="project-mini-button" />
                      </div>
                    </div>
                  </div>
                  <div className="project-copy">
                    <span className="project-category">{project.category}</span>
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
              <img
                src="https://unsplash.com/photos/2A2NWo9kQJg/download?force=true&w=1400"
                alt="Profissional em ambiente corporativo"
                loading="lazy"
              />
              <div className="credibility-card">
                <BadgeCheck size={22} />
                <div><strong>Presença que passa confiança</strong><span>Antes mesmo do primeiro atendimento.</span></div>
              </div>
            </div>

            <div className="credibility-copy">
              <div className="section-label">Credibilidade não se improvisa</div>
              <h2>Seu site precisa responder as dúvidas do cliente <span>antes que ele pergunte.</span></h2>
              <p>
                Um visitante quer entender rapidamente quem você é, o que oferece, por que deveria confiar e qual é o próximo passo. A página precisa trabalhar essas respostas sem parecer um panfleto digital.
              </p>
              <div className="credibility-list">
                <div><span><Building2 size={19} /></span><p><strong>Empresa bem apresentada</strong>Serviços, diferenciais e posicionamento organizados.</p></div>
                <div><span><Layers3 size={19} /></span><p><strong>Prova de trabalho</strong>Projetos e entregáveis visíveis, sem depender de promessas vagas.</p></div>
                <div><span><MessageCircle size={19} /></span><p><strong>Contato fácil</strong>Chamadas claras para orçamento, WhatsApp ou formulário.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits-section" id="beneficios">
          <div className="container">
            <div className="section-heading center">
              <div className="section-label">O que muda no projeto</div>
              <h2>Design bonito é só o começo. <span>O site precisa funcionar comercialmente.</span></h2>
              <p>Cada bloco tem uma função: explicar, gerar confiança, reduzir objeção ou conduzir para o contato.</p>
            </div>

            <div className="benefits-grid">
              {benefits.map(({ icon: Icon, title, text }) => (
                <article className="benefit-card" key={title}>
                  <div className="icon-wrap"><Icon size={22} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="deliverables-section">
          <div className="container deliverables-grid">
            <div className="deliverables-copy">
              <div className="section-label light">Entrega completa</div>
              <h2>Você recebe uma estrutura pronta para <span>apresentar, anunciar e crescer.</span></h2>
              <p>O projeto já nasce preparado para receber as ferramentas e canais que fizerem sentido para o negócio.</p>
              <ul>
                <li><Check size={18} /> Página responsiva e otimizada</li>
                <li><Check size={18} /> SEO técnico inicial</li>
                <li><Check size={18} /> Estrutura para Google Ads e Meta Ads</li>
                <li><Check size={18} /> Integração com WhatsApp e formulários</li>
                <li><Check size={18} /> Hospedagem e domínio configuráveis</li>
              </ul>
              <button className="white-cta" onClick={scrollToContact}>Quero essa estrutura <ArrowRight size={18} /></button>
            </div>

            <div className="deliverables-visual">
              <div className="desktop-frame">
                <div className="frame-top"><i /><i /><i /><span>Projeto desktop</span></div>
                <div className="frame-screen">
                  <span className="frame-nav" />
                  <div className="frame-hero-row"><b /><em /></div>
                  <div className="frame-cards"><span /><span /><span /></div>
                </div>
              </div>
              <div className="phone-frame">
                <div className="phone-notch" />
                <div className="phone-content"><span /><strong /><strong className="short" /><i /><b /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="process-section" id="processo">
          <div className="container">
            <div className="section-heading process-heading">
              <div>
                <div className="section-label">Processo</div>
                <h2>Da ideia ao site no ar, <span>sem complicação.</span></h2>
              </div>
              <p>Você acompanha uma construção organizada, com foco no que realmente precisa estar certo para o projeto funcionar.</p>
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

        <section className="sectors-section">
          <div className="container sectors-grid">
            <div>
              <div className="section-label">Projetos para vários mercados</div>
              <h2>A linguagem muda. <span>O padrão profissional continua.</span></h2>
            </div>
            <div className="sector-cloud">
              {sectors.map((sector) => <span key={sector}>{sector}</span>)}
            </div>
          </div>
        </section>

        <section className="quality-section">
          <div className="container quality-grid">
            <div className="quality-visual">
              <div className="code-window">
                <div className="code-head"><span /><span /><span /><em>site.config</em></div>
                <pre><code>{`const projeto = {\n  visual: "profissional",\n  mobile: "prioridade",\n  velocidade: "alta",\n  objetivo: "gerar oportunidades"\n}`}</code></pre>
                <div className="code-status"><Code2 size={16} /> Estrutura limpa e preparada para evoluir</div>
              </div>
            </div>

            <div className="quality-copy">
              <div className="section-label">Tecnologia com propósito</div>
              <h2>Bonito para quem visita. <span>Bem construído por trás.</span></h2>
              <p>O acabamento visual precisa vir acompanhado de uma base técnica organizada, responsiva e simples de manter.</p>
              <ul>
                <li><Check size={18} /> Código moderno</li>
                <li><Check size={18} /> Responsividade revisada</li>
                <li><Check size={18} /> Estrutura para tags e pixels</li>
                <li><Check size={18} /> Imagens e seções otimizadas</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="final-cta container" id="contato">
          <div className="final-cta-card">
            <div className="cta-glow" />
            <div className="cta-icon"><Globe2 size={27} /></div>
            <div className="section-label light">Seu próximo projeto começa aqui</div>
            <h2>Faça sua empresa parecer online tão profissional quanto ela precisa ser.</h2>
            <p>Conte o que você vende e o que precisa do site. A estrutura pode ser personalizada para o seu negócio, público e objetivo.</p>
            <button className="primary-cta final-button" onClick={() => alert('O número oficial do WhatsApp será conectado aqui na etapa final.') }>
              Solicitar orçamento <MessageCircle size={19} />
            </button>
            <small>Atendimento direto • Projeto personalizado • Layout responsivo</small>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div className="footer-logo-slot" aria-label="Espaço reservado para sua logomarca" />
          <p>Sites profissionais para negócios que querem crescer.</p>
          <span>© 2026</span>
        </div>
      </footer>
    </div>
  )
}

export default App
