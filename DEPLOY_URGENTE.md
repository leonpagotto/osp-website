# 🚨 DEPLOY URGENTE - Bloquear Indexação Google

## Situação Atual
O site Firebase em **https://osp-website-2026.web.app/** está **PERMITINDO indexação** do Google.

Isso pode causar:
- ❌ Penalização por conteúdo duplicado
- ❌ URLs de desenvolvimento aparecendo no Google
- ❌ Perda de autoridade SEO do domínio principal
- ❌ Confusão nos rankings de busca

## ✅ Solução Implementada (Pronta para Deploy)

Todas as proteções foram implementadas no código:
1. **robots.txt bloqueando** todos os crawlers
2. **Meta tags noindex** em todas as páginas
3. **Sitemap desabilitado** no servidor
4. **Detecção automática** de ambientes dev/staging

## 🚀 Como Aplicar (URGENTE)

### Opção 1: Deploy Completo
```bash
npm run deploy
```

### Opção 2: Deploy Preview (Testar Primeiro)
```bash
npm run deploy:preview
```

### Opção 3: Apenas Hosting
```bash
npm run build
firebase deploy --only hosting
```

## 📋 Verificação Pós-Deploy

1. **Verificar robots.txt:**
   ```bash
   curl https://osp-website-2026.web.app/robots.txt
   ```
   **Deve retornar:**
   ```
   User-agent: *
   Disallow: /
   ```

2. **Verificar Meta Tags:**
   - Abrir: https://osp-website-2026.web.app/
   - Ver código-fonte (Ctrl/Cmd + U)
   - Procurar por: `<meta name="robots" content="noindex`
   - **Deve existir:** `noindex, nofollow, noarchive, nosnippet`

3. **Verificar Sitemap:**
   ```bash
   curl -I https://osp-website-2026.web.app/sitemap.xml
   ```
   **Deve retornar:** 404 Not Found

## ⚠️ IMPORTANTE

- **Firebase atual (osp-website-2026.web.app)** = Desenvolvimento/Staging
- **Futuro domínio de produção** = Terá robots.txt diferente (permitindo indexação)
- **Proteção automática** detecta `.web.app` e `.firebaseapp.com` automaticamente

## 🔄 Quando Mudar para Produção

Quando o site estiver pronto e no domínio final:

1. Configurar `NODE_ENV=production` no Firebase
2. Atualizar domínio para `ospcontabilidade.com.br`
3. A detecção automática vai **habilitar** indexação
4. robots.txt produção será servido (com sitemap)

## 📝 Arquivos Modificados

- ✅ `client/public/robots.txt` - Bloqueando crawlers
- ✅ `client/src/components/SEO/SEOHead.tsx` - Meta noindex automático
- ✅ `server/routes.ts` - Sitemap desabilitado + robots dinâmico
- ✅ `firebase-robots-production.txt` - Template para produção

---

**AÇÃO NECESSÁRIA:** Execute `npm run deploy` agora para aplicar as proteções!
