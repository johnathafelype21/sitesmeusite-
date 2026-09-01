import { ArrowUpRight, Camera, Check, MapPin, Palette, Sparkles } from 'lucide-react'
import ImageStreamCorridor from './ImageStreamCorridor'
import { whatsapp } from './brand'

export const aiPortraits = [
  ['Advocacia', 'advogado'], ['Odontologia', 'dentista'], ['Medicina', 'medico'], ['Terapia', 'terapeuta'],
  ['Mercado imobiliário', 'corretor'], ['Arquitetura', 'arquiteto'], ['Nutrição', 'nutricionista'], ['Personal trainer', 'personal'],
  ['Veterinária', 'veterinario'], ['Gastronomia', 'chef'], ['Contabilidade', 'contador'], ['Engenharia', 'engenheiro'],
  ['Barbearia', 'barbeiro'], ['Fotografia', 'fotografo'], ['Estética', 'esteticista'], ['Mecânica', 'mecanico'],
  ['Educação', 'professor'], ['Tatuagem', 'tatuador'], ['Consultoria', 'consultor'], ['Energia solar', 'solar'],
].map(([profession, file]) => ({ profession, src: `/ai-portraits/${file}.webp` }))

const services = [
  {
    Icon: Palette,
    number: '01',
    label: 'IDENTIDADE VISUAL',
    title: 'Ainda não tem logomarca? A gente cria o começo da sua marca.',
    text: 'Logo, paleta, tipografia e direção visual pensadas para seu negócio parecer consistente desde o primeiro contato.',
    features: ['Conceito alinhado ao seu público', 'Cores e tipografia da marca', 'Aplicações para o digital'],
  },
  {
    Icon: MapPin,
    number: '02',
    label: 'PERFIL DA EMPRESA NO GOOGLE',
    title: 'Ajude quem já procura seu serviço a encontrar as informações certas.',
    text: 'Cuidamos do cadastro ou da organização do seu Perfil da Empresa no Google, conhecido como Google Meu Negócio.',
    features: ['Categoria e dados do negócio', 'Contato, horários e imagens', 'Apoio no processo de verificação'],
  },
  {
    Icon: Camera,
    number: '03',
    label: 'ENSAIO FOTOGRÁFICO COM IA',
    title: 'Imagem profissional sem depender de um estúdio para começar.',
    text: 'Criamos cenas profissionais com inteligência artificial para seu site e suas redes, com direção visual própria para sua área.',
    features: ['Cenários ligados à profissão', 'Direção de imagem personalizada', 'Arquivos preparados para o digital'],
  },
]

export default function PresenceServices() {
  return <section className="presence-services" id="presenca-digital" aria-labelledby="presence-title">
    <div className="presence-intro section-pad"><div className="container">
      <div className="presence-heading reveal"><div><span className="section-label"><span /> SUA PRESENÇA NÃO TERMINA NO SITE</span><h2 id="presence-title">Seu negócio precisa parecer<br /><em>tão profissional quanto ele é.</em></h2></div><div><p>Uma marca improvisada, informações incompletas no Google e fotos genéricas diminuem a confiança antes mesmo da conversa começar.</p><strong>Nós organizamos essa presença por inteiro.</strong></div></div>
      <div className="presence-service-grid">{services.map(({ Icon, number, label, title, text, features }) => <article className="presence-card spotlight-card reveal" key={label}><div className="presence-card-top"><span>{number}</span><Icon size={24} /></div><small>{label}</small><h3>{title}</h3><p>{text}</p><ul>{features.map(feature => <li key={feature}><Check size={14} /> {feature}</li>)}</ul></article>)}</div>
      <div className="presence-cta reveal"><div><Sparkles size={21} /><p><strong>Não precisa contratar tudo de uma vez.</strong><br />Montamos uma proposta com o que seu negócio realmente precisa agora.</p></div><a className="button button-dark glow-cta" href={whatsapp('Olá! Quero uma proposta para organizar minha presença digital. Tenho interesse em site, identidade visual, Perfil da Empresa no Google e/ou ensaio fotográfico com IA.')} target="_blank" rel="noopener noreferrer">Quero montar meu pacote <ArrowUpRight size={18} /></a></div>
    </div></div>

    <div className="ai-showcase"><ImageStreamCorridor images={aiPortraits}>
      <div className="ai-showcase-copy"><span><i /> IMAGENS CRIADAS PARA A SUA ÁREA</span><h2>Seu cliente precisa<br />ver <em>presença.</em></h2><p>Ensaios conceituais com IA para apresentar você e seu trabalho com uma direção visual forte.</p></div>
      <div className="ai-showcase-bottom"><span className="ai-disclosure">Imagens demonstrativas geradas por inteligência artificial</span><a href={whatsapp('Olá! Quero saber como funciona o ensaio fotográfico profissional com inteligência artificial para a minha área.')} target="_blank" rel="noopener noreferrer">Quero criar minhas imagens <ArrowUpRight size={18} /></a></div>
    </ImageStreamCorridor></div>

    <div className="profession-cloud"><div className="container"><span className="profession-cloud-label">20 DIREÇÕES VISUAIS. UMA PARA CADA HISTÓRIA.</span><div>{aiPortraits.map(item => <span key={item.profession}>{item.profession}</span>)}</div><p>As imagens acima são exemplos conceituais. Projetos personalizados usam referências fornecidas e autorizadas pelo cliente, com uma direção própria para sua marca.</p></div></div>
  </section>
}
