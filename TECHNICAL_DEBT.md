# Dívida Técnica

## [FONTE-01] Preload de fontes não utilizadas a tempo

**Warning no console (dev):**
```
The resource FreeSerif-s.p.*.ttf was preloaded using link preload but not used within a few seconds from the window's load event.
The resource JTUSjIg1_*.woff2 (Montserrat) was preloaded using link preload but not used within a few seconds from the window's load event.
```

**Causa:**
O `display: 'swap'` nas configurações de fonte (`layout.tsx`) faz o Next.js gerar `<link rel="preload">` para Montserrat e FreeSerif. O browser espera que as fontes sejam aplicadas logo após o carregamento, mas o `ChakraProvider` (`'use client'`) introduz um delay de hidratação que abre esse gap.

O FreeSerif agrava o problema por estar em formato `.ttf` (mais pesado que `.woff2`).

**Soluções mapeadas:**
- Converter `FreeSerif.ttf` → `.woff2` para reduzir o tempo de parse
- Adicionar `preload: false` no Montserrat (dois pesos preloaded sem uso crítico above the fold)
- Combinar as duas abordagens acima

**Impacto atual:** warning apenas em ambiente de desenvolvimento. Não afeta usuários em produção com cache quente.

**Arquivos envolvidos:** `src/app/layout.tsx`

---

## [IMG-01] False positive no sizes do hero-bg.jpg

**Warning no console (dev):**
```
Image with src "/hero-bg.jpg" has "fill" prop and "sizes" prop of "100vw", but image is not rendered at full viewport width.
```

**Causa:**
O `sizes="100vw"` está correto — quando renderizada (xl+, ≥1280px), a imagem cobre 100% da viewport. O analisador estático do Next.js detecta o `display={{ base: 'none', xl: 'block' }}` no wrapper e interpreta que a imagem não é sempre full width, gerando um falso positivo.

**Impacto atual:** warning cosmético em dev. Sem impacto em produção ou para o usuário.

**Arquivos envolvidos:** `src/components/sections/Hero/index.tsx`

---

## [DEV-01] Chrome DevTools 404 em desenvolvimento

**Warning no console (dev):**
```
GET /.well-known/appspecific/com.chrome.devtools.json 404
```

**Causa:**
O Chrome tenta buscar um arquivo de configuração de DevTools que não existe no projeto. Não é um erro da aplicação.

**Solução mapeada:** criar `public/.well-known/appspecific/com.chrome.devtools.json` com `{}` para retornar 200 e silenciar o log.

**Impacto atual:** log cosmético apenas em dev. Não aparece em produção.
