# Portfólio — Celso Fabri Junior

Portfólio profissional em React (Vite), 100% responsivo, com dark mode e integração
com a GitHub API para exibir projetos automaticamente.

## Stack

- [Vite](https://vitejs.dev/) + [React 19](https://react.dev/)
- [React Router](https://reactrouter.com/) para navegação entre páginas
- CSS Modules (sem dependências extras de CSS)
- Fetch direto na GitHub API (`https://api.github.com/users/<usuario>/repos`)

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173` (ou a porta indicada no terminal).

Para gerar o build de produção:

```bash
npm run build
npm run preview
```

## Onde configurar seus dados

Todo o conteúdo pessoal do site fica centralizado em **`src/config/profile.js`**:

| Campo | Descrição |
|---|---|
| `name`, `title`, `tagline`, `heroSubtitle` | Textos da Home |
| `bio` | Texto da página "Sobre" (aceita múltiplos parágrafos separados por `\n`) |
| `avatar` | Caminho da foto de perfil (veja seção abaixo) |
| `github`, `githubUsername`, `linkedin`, `email` | Links de contato e usuário usado para buscar repositórios |
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

A página `/portfolio` busca automaticamente os repositórios públicos do usuário
definido em `githubUsername`, ignorando forks e repositórios arquivados, e permite
filtrar por linguagem. Não é necessário editar nada manualmente — bastando manter
seus repositórios do GitHub com descrição e (quando existir) o campo "Website"
preenchido para que o botão "Ver deploy" apareça.

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
src/
  components/   Header, Footer, ProjectCard, Badge, SocialLinks, ThemeToggle, Reveal
  config/       profile.js — todos os dados pessoais
  hooks/        useTheme, useGithubRepos, useReveal
  pages/        Home, About, Portfolio, Contact (cada uma com seu .module.css)
  styles/       global.css e variables.css (paleta de cores / tema claro-escuro)
  utils/        languageColors.js — cores por linguagem nos cards de projeto
public/
  avatar-placeholder.svg
```

## Dark mode

O tema padrão é escuro, com toggle manual no cabeçalho (persistido em
`localStorage`). As cores de ambos os temas ficam em `src/styles/variables.css`.
