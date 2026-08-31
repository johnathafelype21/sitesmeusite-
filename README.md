# SitesPrime

Vitrine de sites para 12 profissões, construída com React e Vite. Cada modelo tem uma página própria, linguagem visual e conteúdo demonstrativo. Todas as marcas e ofertas são fictícias.

## Desenvolvimento

- Node.js 22.13+; instalar com `npm ci`.
- `npm run dev` inicia o ambiente local.
- `npm run build` compila a aplicação, gera HTML para cada modelo e prepara o Worker do Sites.
- `npm run preview` serve a versão estática compilada.

A saída estática continua em `dist/`, compatível com o projeto Vercel existente. O Sites usa `dist/server/index.js` e `dist/client/`. A versão hospedada no Sites é privada até que o proprietário altere o acesso. O build gera metadados exclusivos para todos os modelos; `SITE_ORIGIN` ou a variável de publicação `VERCEL_URL` define a origem dos metadados estáticos. O Worker usa a origem da requisição recebida pela plataforma, sem confiar em cabeçalhos encaminhados.

## Conteúdo e contato

- `src/models.js`: identidades, textos, serviços e fotos dos modelos.
- `src/App.jsx`: vitrine, filtros, páginas e formulário.
- `src/index.css`, `src/demo.css`, `src/responsive.css`: estilos e adaptações para celular.
- Fotos Unsplash armazenadas localmente em WebP, com versões de 480 e 1200 px. IDs originais preservados no catálogo. `scripts/download-assets.mjs` atualiza as cópias.
- `public/og.png`: imagem original gerada para compartilhamento da SitesPrime.

O repositório original não contém um WhatsApp, e-mail comercial ou serviço de recebimento. O formulário gera um resumo local que o visitante pode copiar ou baixar; não envia, armazena ou simula um pedido. Para ativar contato real, conectar o canal oficial do proprietário. Os botões dos modelos mostram essa limitação e encaminham a personalização para a vitrine principal.

Navegação por teclado, menu móvel com Escape, filtros com estado acessível, FAQ expansível, texto alternativo das imagens e respeito a `prefers-reduced-motion` estão incluídos.
