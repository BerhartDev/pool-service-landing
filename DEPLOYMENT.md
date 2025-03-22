# Configuração do Deploy no GitHub Pages

Este documento explica o processo de configuração do deploy automático do projeto Next.js no GitHub Pages.

## 1. Configuração do Next.js

Primeiro, configuramos o Next.js para gerar uma build estática que pode ser hospedada no GitHub Pages. Isso foi feito no `next.config.js`:

```js
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  basePath: '/pool-service-landing',
  assetPrefix: '/pool-service-landing/',
  output: 'export',
}
```

- `basePath`: Define o caminho base da aplicação como '/pool-service-landing'
- `assetPrefix`: Configura o prefixo para assets estáticos
- `output: 'export'`: Gera uma build estática que pode ser servida sem um servidor Node.js

## 2. Configuração do GitHub Actions

Criamos um workflow do GitHub Actions (`.github/workflows/deploy.yml`) para automatizar o processo de deploy:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: out
```

Este workflow:
1. É acionado quando há um push na branch main
2. Configura um ambiente Node.js
3. Instala as dependências
4. Gera a build do projeto
5. Faz o deploy para a branch gh-pages

## 3. Configuração do GitHub Pages

No repositório do GitHub:
1. Fomos em Settings > Pages
2. Selecionamos "GitHub Actions" como fonte
3. O site é publicado automaticamente em: https://berhartdev.github.io/pool-service-landing/

## 4. Arquivos Ignorados

Configuramos o `.gitignore` para excluir arquivos desnecessários do controle de versão:

```
# dependencies
/node_modules
/.pnp
.pnp.js

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

## Como Funciona

1. Quando você faz um push para a branch `main`:
   - O GitHub Actions é acionado automaticamente
   - Uma nova build é gerada
   - O conteúdo é publicado na branch `gh-pages`
   - O site é atualizado automaticamente

2. O GitHub Pages serve o conteúdo da branch `gh-pages` em:
   https://berhartdev.github.io/pool-service-landing/

## Manutenção

Para atualizar o site:
1. Faça suas alterações localmente
2. Commit e push para a branch `main`
3. O GitHub Actions fará o resto automaticamente

Você pode acompanhar o status do deploy em:
https://github.com/BerhartDev/pool-service-landing/actions 