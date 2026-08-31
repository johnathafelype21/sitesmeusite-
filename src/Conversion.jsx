import { ArrowUpRight, Check, ShieldCheck, MessageCircle, LayoutTemplate, MousePointer2 } from 'lucide-react'
import { whatsapp, cnpj } from './brand'

export function ConversionSection() {
 return <section className="conversion-section section-pad"><div className="container"><div className="section-top"><div><span className="section-label">SEU SITE PRECISA DAR O PRÓXIMO PASSO</span><h2>Ser visto é o começo.<br/><em>Ser escolhido é o objetivo.</em></h2></div><p>Quando alguém procura seu serviço, cada detalhe ajuda a decidir: continuar procurando ou conversar com você.</p></div><div className="conversion-grid">{[
 ['01','Seu valor, sem deixar dúvidas.','Apresente o que você faz, para quem é e por que vale a pena conhecer seu trabalho. Uma mensagem clara ajuda o cliente a perceber seu diferencial.'],
 ['02','Confiança antes da conversa.','Sua identidade, seus serviços e suas informações reunidos em uma experiência profissional. Dê ao visitante razões concretas para dar o próximo passo.'],
 ['03','Menos obstáculos para chamar.','Botões de orçamento e WhatsApp no lugar certo. O visitante encontra o caminho até você sem precisar procurar como entrar em contato.']
 ].map(([n,title,text])=><article className="spotlight-card" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="conversion-bottom"><p><strong>Seu negócio já tem valor.</strong> Vamos fazer a sua presença digital mostrar isso?</p><a className="button button-dark glow-cta" href={whatsapp('Olá! Quero um site que apresente melhor meu negócio. Podemos conversar sobre um orçamento?')} target="_blank" rel="noopener noreferrer">Quero um orçamento para meu site <ArrowUpRight size={18}/></a></div></div></section>
}

export function OfferSection() {
 return <section className="offer-section section-pad" id="solucoes"><div className="container"><div className="section-top"><div><span className="section-label">QUAL É O SEU PRÓXIMO PASSO?</span><h2>Um site pensado para<br/><em>o seu objetivo.</em></h2></div><p>Escolha o que você precisa comunicar. Nós definimos com você a estrutura, os recursos e o investimento.</p></div><div className="offer-grid">{[
 [LayoutTemplate,'Site institucional','Para apresentar sua empresa com a profundidade que ela merece.',['Sua história e seus diferenciais','Serviços organizados por área','Contato claro em cada etapa']],
 [MousePointer2,'Página para campanhas','Para concentrar a atenção em uma oferta, serviço ou lançamento.',['Mensagem focada no seu público','Benefícios e objeções bem respondidos','Chamada direta para solicitar orçamento']],
 [MessageCircle,'Portfólio ou catálogo','Para quem precisa mostrar o trabalho antes de explicar seu valor.',['Projetos e produtos em destaque','Galerias e filtros para explorar','Consulta sobre o que despertou interesse']]
 ].map(([Icon,title,description,items])=><article key={title}><Icon size={25}/><h3>{title}</h3><p>{description}</p><ul>{items.map(t=><li key={t}><Check size={15}/>{t}</li>)}</ul><a href={whatsapp('Olá! Quero solicitar um orçamento de '+title.toLowerCase()+' para meu negócio.')} target="_blank" rel="noopener noreferrer">Solicitar orçamento <ArrowUpRight size={17}/></a></article>)}</div><div className="proposal-note"><ShieldCheck size={22}/><div><strong>Você sabe o que está contratando.</strong><p>Escopo, investimento e prazo alinhados antes de começar. Orçamento sem compromisso e uma conversa direta sobre o que faz sentido para seu negócio.</p></div><span>CNPJ<br/><strong>{cnpj}</strong></span></div></div></section>
}

