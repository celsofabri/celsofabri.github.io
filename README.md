# Portfólio — Celso Fabri Junior

Portfólio profissional em React (Vite), 100% responsivo, com dark mode e integração
com a GitHub API para exibir projetos automaticamente.

🔗 **Produção:** [celsofabri.github.io](https://celsofabri.github.io/)

## Stack

- [Vite](https://vitejs.dev/) + [React 19](https://react.dev/)
- [React Router](https://reactrouter.com/) para navegação entre páginas
- CSS Modules (sem dependências extras de CSS)
- Fetch direto na GitHub API (`https://api.github.com/users/<usuario>/repos`)

## Requisitos

- **Node.js 24.20.0** (LTS "Krypton") — versão fixada em `.nvmrc` e em `engines`
  no `package.json`. Se usa [nvm](https://github.com/nvm-sh/nvm):

  ```bash
  nvm install   # instala a versão do .nvmrc, se ainda não tiver
  nvm use       # ativa a versão do .nvmrc nesta pasta
  ```

- npm (vem junto com o Node)

## Como rodar localmente

```bash
git clone git@github.com:celsofabri/celsofabri.github.io.git
cd celsofabri.github.io
nvm use          # opcional, mas garante a mesma versão do Node do CI
npm install
npm run dev
```

Acesse `http://localhost:5173` (ou a porta indicada no terminal).

Outros comandos úteis:

```bash
npm run build     # build de produção em dist/ (roda o postbuild automaticamente)
npm run preview   # serve o build de produção localmente, pra testar antes de publicar
npm run lint      # checagem estática com oxlint
```

## Deploy

O deploy é automático via **GitHub Actions** (`.github/workflows/deploy.yml`):
todo push/merge na branch `main` builda o projeto e publica no **GitHub Pages**.

Como este repositório é uma *user page* (`celsofabri.github.io`), o site fica
disponível direto na raiz do domínio, sem subpasta:
**https://celsofabri.github.io/**

Fluxo de trabalho: abrir uma branch/PR → revisar → mergear em `main` → o
workflow builda e publica sozinho (acompanhe em **Actions**, no repositório).
Não é necessário nenhum passo manual de deploy.

## Onde configurar seus dados

Todo o conteúdo pessoal do site fica centralizado em **`src/config/profile.js`**:

| Campo | Descrição |
|---|---|
| `name`, `title`, `tagline`, `heroSubtitle` | Textos da Home |
| `bio` | Texto da página "Sobre" (aceita múltiplos parágrafos separados por `\n`) |
| `avatar` | Caminho da foto de perfil (veja seção abaixo) |
| `github`, `githubUsername`, `linkedin`, `behance`, `email` | Links de contato e usuário usado para buscar repositórios |
| `skills` | Lista de badges de tecnologias na página "Sobre" |
| `experience` | Array de experiências profissionais — vira os cards estilo currículo, com logo, cargo, empresa, período e lista de conquistas (`highlights`) |
| `education` | Array de formação acadêmica |
| `certifications` | Lista simples de certificações (opcional — remova o array para ocultar a seção) |
| `languages` | Array `{ name, level }` de idiomas (opcional) |

### Logos das empresas

Cada item de `experience` aceita um campo opcional `logo: '/logos/<arquivo>.svg'`.
Coloque o arquivo em `public/logos/` e referencie o caminho absoluto. Sem esse
campo, um badge colorido com as iniciais da empresa é exibido automaticamente
(`src/components/CompanyLogo.jsx`).

Já incluídas (baixadas do Wikimedia Commons, domínio público/CC): iFood, EBANX,
Creditas e MadeiraMadeira. As demais empresas (agências e startups menores,
algumas já encerradas) usam o badge de iniciais por não haver uma fonte oficial
confiável para a logo — adicione manualmente em `public/logos/` se tiver o
arquivo.

### Foto de perfil

1. Coloque sua foto em `public/` (ex: `public/avatar.jpg`).
2. Atualize `avatar: '/avatar.jpg'` em `src/config/profile.js`.

Um placeholder ilustrado (`public/avatar-placeholder.svg`) é usado até você trocar.

### Projetos do Portfólio

A página `/portfolio` tem dois níveis, em ordem de importância:

**1. Cases selecionados (destaque).** Vêm de `src/config/behance.js` — uma
curadoria manual dos trabalhos publicados em
[behance.net/celsofabri](https://www.behance.net/celsofabri). São exibidos como
um índice numerado: cada linha abre no clique revelando capa, descrição,
ferramentas, créditos e link para o case completo. No desktop, passar o mouse
pelas linhas faz a capa aparecer seguindo o cursor; no toque, cada linha mostra
uma miniatura inline.

Para incluir, remover ou reordenar um case, edite o array `behanceCases`:

| Campo | Descrição |
|---|---|
| `slug` | Identificador; também o nome do arquivo em `public/behance/` |
| `title`, `year`, `summary` | O que aparece na linha fechada |
| `category` | Usada nos filtros — precisa existir em `caseCategories` |
| `description` | Array de parágrafos exibidos quando o case é aberto |
| `role`, `tools`, `credits` | Papel no projeto, tecnologias e ficha técnica |
| `url`, `cover` | Link do Behance e caminho da capa em `public/behance/` |

As capas ficam em `public/behance/<slug>.webp` (808px de largura), baixadas do
próprio Behance — assim o site não depende do CDN deles em runtime.

**2. Código aberto no GitHub (complemento).** Abaixo dos cases, a página busca
automaticamente os repositórios públicos do usuário definido em
`githubUsername`, ignorando forks e repositórios arquivados, e permite filtrar
por linguagem. Não é necessário editar nada manualmente — basta manter seus
repositórios com descrição e (quando existir) o campo "Website" preenchido para
que o link "Deploy" apareça.

### Formulário de contato (Web3Forms)

O formulário envia e-mail direto do navegador usando o
[Web3Forms](https://web3forms.com) — um único `fetch` para a API deles, sem
SDK, sem backend e **sem conectar nenhuma conta de e-mail** (nada de OAuth com
o Google). É grátis até 250 envios/mês. Enquanto não for configurado, o
formulário usa automaticamente um fallback via `mailto:` (abre o cliente de
e-mail do visitante).

Passo a passo:

1. Acesse [web3forms.com](https://web3forms.com) e digite o e-mail onde você
   quer receber as mensagens (não pede senha nem login).
2. Você recebe a **Access Key** por e-mail em segundos — copie-a.
3. Cole em `src/config/web3forms.js`:

   ```js
   export const web3formsConfig = {
     accessKey: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
   }
   ```

Pronto — o formulário passa a enviar de verdade, com estados de carregando,
sucesso e erro (com fallback para `mailto:` caso o envio falhe). Cada envio
chega no seu e-mail com nome, e-mail e mensagem preenchidos pelo visitante.

## Estrutura de pastas

```
.github/
  workflows/    deploy.yml — build + deploy automático no GitHub Pages
src/
  components/   Header, Footer, CaseIndex, ProjectCard, Badge, CompanyLogo, SocialLinks, ThemeToggle, Reveal
  config/       profile.js (dados pessoais), behance.js (cases em destaque), web3forms.js
  hooks/        useTheme, useGithubRepos, useReveal, useCursorPreview
  pages/        Home, About, Portfolio, Contact (cada uma com seu .module.css)
  styles/       global.css e variables.css (paleta de cores / tema claro-escuro)
  utils/        assetPath.js, languageColors.js, companyColor.js
public/
  avatar.jpg, avatar-placeholder.svg
  behance/      capas dos cases em destaque do portfólio
  logos/        logos das empresas/instituições usadas na página "Sobre"
.nvmrc          versão do Node usada localmente e no CI
```

## Dark mode

O tema padrão é escuro, com toggle manual no cabeçalho (persistido em
`localStorage`). As cores de ambos os temas ficam em `src/styles/variables.css`.
