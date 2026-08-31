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

## Revisão de identidade e conversão

A logo é exibida integralmente com object-fit: contain, sem ampliação ou recorte. CNPJ informado pelo proprietário: 48.998.191/0001-59 (não representa verificação cadastral). A identificação nos modelos pertence à agência, não às empresas fictícias.

Cada modelo inclui uma experiência própria em src/SignatureExperience.jsx: jornada odontológica, cenário jurídico, acolhimento terapêutico, prioridades do imóvel, materiais arquitetônicos, estilo de beleza, pessoas à mesa, rotina de treino ilustrativa, fases do pet, coleções de fotos, momento empresarial, direção de tatuagem, rotina alimentar, seleção de barbearia, motivo de atendimento automotivo e trilhas educacionais. Textos de processo específicos em src/journeys.js.

src/Conversion.jsx apresenta benefícios e formatos de projeto, orçamento sem compromisso e escopo alinhado antes de começar. Os efeitos em src/Motion.jsx e src/signatures.css incluem revelação de títulos, entrada no scroll, progresso de leitura, brilho nos botões e efeitos visuais específicos. Implementação própria: prévias públicas do 21st.dev consultadas; o código de componentes que exigiam login não foi acessado nem copiado. Referência adicional: https://21st.dev/@theutkarshmail/components/slide-glow-button.

## Controle explícito de movimento

A ausência de animações no navegador de revisão foi reproduzida com `prefers-reduced-motion: reduce`. O site respeita essa preferência por padrão. O controle visual foi removido a pedido do proprietário; os efeitos são automáticos, preservando escolhas explícitas de movimento já feitas neste site. Não altera a configuração do sistema.

As 17 páginas têm fundos animados visíveis, e cada modelo recebe uma direção de efeito: órbitas, linhas douradas, blueprint, ondas, seda, brasas, velocidade, bolhas, filme, grade, scanner, formas orgânicas, faixas e formas criativas. Os efeitos decorativos não interceptam cliques, são simplificados no celular e pausam fora da área visível. Permanecem implementações próprias inspiradas nas referências públicas do 21st.dev, não código de componentes restritos por login.

Verificação desta revisão: 51 combinações de página e largura com movimento explicitamente ativado; controle sem sobreposição com WhatsApp; pausa desligando as animações; persistência entre páginas e preferência original por menos movimento preservada até a escolha explícita.


O botão flutuante usa a imagem transparente de WhatsApp fornecida pelo proprietário, em todas as 17 páginas, mantendo o destino 5562991735288. O controle de pausar/ativar efeitos e seus estilos foram removidos.
