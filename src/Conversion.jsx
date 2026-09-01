import { ArrowUpRight, Check, ShieldCheck, MessageCircle, LayoutTemplate, MousePointer2 } from 'lucide-react'
import { whatsapp, cnpj } from './brand'

export function ConversionSection() {
 return <section className="conversion-section section-pad"><div className="container"><div className="section-top"><div><span className="section-label">UM SITE PRECISA TRABALHAR PELO SEU NEGÓCIO</span><h2>Atenção sem ação é vaidade.<br/><em>Seu objetivo é receber contatos.</em></h2></div><p>Design chama o olhar. Estratégia mantém o interesse, responde objeções e conduz a pessoa até o pedido de orçamento.</p></div><div className="conversion-grid">{[
 ['01','Diga por que escolher você.','Seu cliente não deve adivinhar seu diferencial. Apresente sua solução, seu método e o valor que torna sua empresa a escolha certa.'],
 ['02','Elimine a dúvida que trava o contato.','Serviços, processo e respostas bem organizados reduzem insegurança e preparam uma conversa muito mais qualificada.'],
 ['03','Peça a ação no momento certo.','WhatsApp e orçamento aparecem quando o visitante já entendeu o valor. Menos distração, mais caminho para conversar.']
 ].map(([n,title,text])=><article className="spotlight-card" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="conversion-bottom"><p><strong>Você já investiu no seu negócio.</strong> Agora sua presença digital precisa estar à altura dele.</p><a className="button button-dark glow-cta" href={whatsapp('Olá! Quero um site profissional pensado para transformar visitas em pedidos de orçamento.')} target="_blank" rel="noopener noreferrer">Quero transformar visitas em contatos <ArrowUpRight size={18}/></a></div></div></section>
}

export function OfferSection() {
 return <section className="offer-section section-pad" id="solucoes"><div className="container"><div className="section-top"><div><span className="section-label">QUAL É O SEU PRÓXIMO PASSO?</span><h2>Um site pensado para<br/><em>o seu objetivo.</em></h2></div><p>Escolha o que você precisa comunicar. Nós definimos com você a estrutura, os recursos e o investimento.</p></div><div className="offer-grid">{[
 [LayoutTemplate,'Site institucional','Para apresentar sua empresa com a profundidade que ela merece.',['Sua história e seus diferenciais','Serviços organizados por área','Contato claro em cada etapa']],
 [MousePointer2,'Página para campanhas','Para concentrar a atenção em uma oferta, serviço ou lançamento.',['Mensagem focada no seu público','Benefícios e objeções bem respondidos','Chamada direta para solicitar orçamento']],
 [MessageCircle,'Portfólio ou catálogo','Para quem precisa mostrar o trabalho antes de explicar seu valor.',['Projetos e produtos em destaque','Galerias e filtros para explorar','Consulta sobre o que despertou interesse']]
 ].map(([Icon,title,description,items])=><article key={title}><Icon size={25}/><h3>{title}</h3><p>{description}</p><ul>{items.map(t=><li key={t}><Check size={15}/>{t}</li>)}</ul><a href={whatsapp('Olá! Quero solicitar um orçamento de '+title.toLowerCase()+' para meu negócio.')} target="_blank" rel="noopener noreferrer">Solicitar orçamento <ArrowUpRight size={17}/></a></article>)}</div><div className="proposal-note"><ShieldCheck size={22}/><div><strong>Você sabe o que está contratando.</strong><p>Escopo, investimento e prazo alinhados antes de começar. Orçamento sem compromisso e uma conversa direta sobre o que faz sentido para seu negócio.</p></div><span>CNPJ<br/><strong>{cnpj}</strong></span></div></div></section>
}

