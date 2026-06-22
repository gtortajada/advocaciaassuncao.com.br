# Advocacia Assunção — CLAUDE.md

## Projeto

Site institucional do escritório **Advocacia Assunção**, especializado em direito trabalhista bancário. Atendimento remoto para todo o Brasil.

- **Advogado:** João Pedro Assunção
- **WhatsApp:** 5544988592720
- **E-mail:** joaopedro.assuncao.adv@gmail.com
- **Horário:** seg–sex, 9h–12h e 14h–17h30

## Stack

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **UI:** Chakra UI v2 — usar apenas esta biblioteca para componentes e layout
- **Fontes:** Montserrat (corpo) via `next/font/google` | FreeSerif (títulos hero) via `next/font/local`
- **Gerenciador de pacotes:** pnpm
- **Deploy:** Vercel

## Estrutura

SPA de página única. Todas as seções estão em `src/components/sections/`:

```
Hero → Services → Testimonials → Specialties → AboutUs → Contact
```

Âncoras de navegação: `#home`, `#services`, `#testimonials`, `#specialties`, `#about`, `#contact`

Layout global: `src/app/layout.tsx` → `WebsiteLayout` → `Navbar` + conteúdo + `Footer`

## Paleta de cores (hardcoded — não alterar sem alinhamento)

| Uso | Valor |
|---|---|
| Fundo escuro / primário | `#2e1012` |
| Ouro / destaque | `#edcb77` / `#FFD700` / `#ffe4a2` |
| Bege / fundo claro | `#E9DAC6` |
| Prata / texto nav | `#C0C0C0` |
| Creme / texto sobre escuro | `#fff4e4` / `#f6ecdf` |

## Regras do projeto

- **Mobile first** — toda alteração deve ser verificada em mobile antes de desktop.
- **Consistência visual obrigatória** — qualquer mudança deve ser indistinguível do estilo atual. Seguir exatamente os padrões de espaçamento, tipografia e cores já usados.
- **Chakra UI apenas** — não introduzir outras bibliotecas de UI ou CSS-in-JS.
- **Sem novas páginas por enquanto** — o site permanece como SPA.
- **Sem formulários ou CMS** — contato exclusivamente via WhatsApp e e-mail.

## Analytics

- **Google Tag Manager** instalado no `layout.tsx` via `next/script`.
- Scripts de terceiros devem sempre usar `next/script` com `strategy="afterInteractive"`.

## Comandos

```bash
pnpm dev      # inicia com Turbopack em localhost:3000
pnpm build    # build de produção
pnpm lint     # ESLint
```
