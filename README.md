# Soluções Digitais

Vitrine comercial em React e Vite com a identidade azul-marinho, ciano e violeta fornecida pelo proprietário. Publicação principal: https://sitesmeusite-preview.vercel.app/.

## Desenvolvimento

Node.js 22.13+; instalar com `npm ci`. Comandos: `npm run dev`, `npm run build`, `npm run validate`, `npm run preview`.

O build gera HTML e metadados para a página inicial, 16 modelos e uma página 404. A saída em `dist/` preserva a integração Vercel do repositório. O artefato opcional do Sites fica em `dist/server` e `dist/client`; sua presença não significa que houve publicação no Sites. A origem dos metadados segue `SITE_ORIGIN`, `VERCEL_PROJECT_PRODUCTION_URL`, `VERCEL_URL` ou o endereço principal, nessa ordem.

## Conteúdo

- `src/models.js`, `src/more-models.js`, `src/profiles.js`: 16 marcas fictícias, textos e referências visuais.
- `src/App.jsx`: vitrine, filtros e resumo comercial.
- `src/ProfessionalDemo.jsx`: páginas com 11 seções, navegação móvel, serviços interativos, galerias, artigos, FAQ e simulação de solicitação.
- `src/dark.css`: identidade da agência e efeitos. `src/professional.css`: estilos distintos dos modelos e adaptações de tela.
- `src/Effects.jsx`: aurora, feixes, parallax discreto e spotlight com CSS e requestAnimationFrame; efeitos reduzidos para quem prefere menos movimento.
- `src/brand.js`: WhatsApp oficial 55 62 99173-5288 e Instagram @solucoes_digitaisnet.
- Fotos ilustrativas do Unsplash armazenadas em WebP, em 480 e 1200 px. IDs de origem preservados nos catálogos.
- `public/logo.jpg`: logo enviada pelo proprietário. `public/og.png`: arte de compartilhamento na identidade atualizada.

O formulário comercial prepara uma mensagem local. O visitante revisa o resumo, abre o WhatsApp e confirma o envio no aplicativo. Não há banco de dados nem envio automático. Os formulários dos modelos são apenas simulações, explicitamente identificadas, sem coleta de dados pessoais. Não representam atendimento médico, jurídico, agendamento real, disponibilidade de imóveis ou preços.

Referências de efeitos: https://21st.dev/@dhileepkumargm/components/spotlight-background e https://21st.dev/@jorgevarelarz/components/laser-focus. Implementação própria e leve, sem dependência do código desses componentes.
