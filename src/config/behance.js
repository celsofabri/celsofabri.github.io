// Cases selecionados, importados do perfil do Behance:
// https://www.behance.net/celsofabri
//
// Este arquivo é a fonte de verdade dos trabalhos em destaque da página
// /portfolio. Diferente dos repositórios do GitHub (que vêm da API em tempo
// real), estes cases são curados manualmente — edite aqui para incluir,
// remover ou reordenar.
//
// Campos:
//   slug        identificador; também o nome do arquivo em public/behance/
//   title       nome do case
//   year        ano do trabalho. Vale o ano que o próprio case indica (ou, na
//               falta dele, o da publicação no Behance) — exceto quando esse
//               ano cai FORA da passagem pela empresa do projeto (ver
//               `experience` em profile.js). Aí ele é ajustado para o último
//               ano da passagem, já que o Behance costuma ser publicado bem
//               depois do trabalho em si.
//   category    usada nos filtros (precisa bater com `caseCategories`)
//   summary     uma linha, exibida na lista fechada
//   description parágrafos exibidos quando o case é expandido
//   role        o que o Celso fez no projeto
//   tools       ferramentas/tecnologias
//   credits     equipe/agência (opcional)
//   url         link do case no Behance
//   cover       capa em public/behance/

export const behanceProfileUrl = 'https://www.behance.net/celsofabri'

export const caseCategories = ['Todos', 'Produto & UI', 'Sites & Plataformas', 'Branding']

export const behanceCases = [
  {
    slug: 'cactus-design-system',
    title: 'Cactus Design System',
    year: '2020',
    category: 'Produto & UI',
    summary: 'Design system da Creditas — biblioteca de componentes e protótipo navegável em Figma.',
    description: [
      'Design system da Creditas (que havia adquirido a Bcredi), construído para padronizar componentes, tokens e padrões de interface entre os produtos da empresa, com protótipo navegável publicado direto do Figma.',
      'O case reúne a biblioteca de componentes e a documentação visual do sistema, desenhados ao longo da migração de Sketch/Abstract para Figma.',
    ],
    role: 'Design system · UI',
    tools: ['Figma', 'Sketch', 'Abstract', 'Zeplin', 'InVision'],
    credits: 'Em parceria com Renato Mourato',
    url: 'https://www.behance.net/gallery/169780957/Cactus-Design-System',
    cover: '/behance/cactus-design-system.webp',
  },
  {
    slug: 'priscila-batistao',
    title: 'Priscila Batistão — Concept Photography Designer',
    year: '2023',
    category: 'Branding',
    summary: 'Identidade visual conceitual: marca, sistema geométrico de linhas e aplicações.',
    description: [
      'Projeto de identidade visual para a fotógrafa e designer Priscila Batistão, construído sobre um sistema geométrico de linhas que se repete da marca às aplicações.',
      'O case apresenta a construção do logo, a paleta, as variações da marca e as peças finais.',
    ],
    role: 'Identidade visual',
    tools: ['Adobe XD'],
    url: 'https://www.behance.net/gallery/165377147/Priscila-Batistao-Concept-Photography-Designer',
    cover: '/behance/priscila-batistao.webp',
  },
  {
    slug: 'ebanx-site-2018',
    title: 'EBANX Site 2018',
    year: '2018',
    category: 'Produto & UI',
    summary: 'Site institucional multi-país da fintech, com autonomia total de conteúdo via CMS.',
    description: [
      'O novo site do EBANX nasceu para resolver duas frentes. A primeira, de produto: recriar a presença da empresa à altura do seu crescimento acelerado, mostrando ao usuário final o que o EBANX faz, onde é possível comprar com EBANX, a nova área do cliente, uma central de ajuda completa e a frente de negócios para empresas.',
      'A segunda, de tecnologia: dar autonomia de conteúdo ao time. O WordPress foi escolhido como CMS para que as pessoas atualizassem o site sem depender de engenharia, incluindo o suporte à expansão para novos países da América Latina.',
      'O projeto passou a suportar 2 idiomas e 8 países, com a criação de novos idiomas/países a um clique no painel.',
    ],
    role: 'UI/UX e front-end',
    tools: ['WordPress', 'Sketch', 'HTML', 'CSS', 'JavaScript', 'Zeplin', 'InVision'],
    url: 'https://www.behance.net/gallery/117536729/EBANX-Site-2018',
    cover: '/behance/ebanx-site-2018.webp',
  },
  {
    slug: 'blog-bcredi',
    title: 'Blog Bcredi',
    year: '2020',
    category: 'Sites & Plataformas',
    summary: 'Reformulação visual do blog com ganhos de performance, acessibilidade e autonomia editorial.',
    description: [
      'Além de reformular o blog visualmente, a nova versão atacou funcionalidades, performance e acessibilidade — débitos técnicos que a versão anterior carregava.',
      'O gerenciador de conteúdo foi aprimorado para que o time de Marketing tivesse liberdade total sobre conteúdo e sobre opções de comportamento de layout, sem depender de um desenvolvedor.',
      'O tema do WordPress foi construído do zero, com plugins apenas para customização de conteúdo e SEO (Advanced Custom Fields, Option Tree, Yoast SEO). O desenvolvimento usou o Gulp WP Theme, do Cezar Luiz Sampaio.',
    ],
    role: 'Front-end e tema WordPress',
    tools: ['WordPress', 'PHP', 'HTML5', 'CSS3', 'JavaScript', 'Sketch', 'Zeplin', 'InVision'],
    credits: 'Design: Renato Mourato · Devs: Celso Fabri Junior, Julio Lozovei e Luigi Domingues',
    url: 'https://www.behance.net/gallery/117130853/Blog-Bcredi',
    cover: '/behance/blog-bcredi.webp',
  },
  {
    slug: 'ebanx-area-do-cliente',
    title: 'Área do Cliente EBANX',
    year: '2019',
    category: 'Produto & UI',
    summary: 'Reconstrução em React da plataforma de reembolsos de compras internacionais.',
    description: [
      'A Área do Cliente EBANX (antiga Conta EBANX) é a plataforma criada para facilitar os reembolsos de compras feitas em sites internacionais como AliExpress, Wish e GearBest.',
      'O projeto foi reconstruído para facilitar a experiência do usuário, com melhor desempenho e um upgrade visual.',
      'Minha participação envolveu a construção da UI — sugerindo e testando com o time de design as ideias para a nova experiência — e contribuição direta no front-end, das decisões de arquitetura e tecnologia (como adotar React) até as micro-interações aplicadas.',
    ],
    role: 'UI e front-end',
    tools: ['React', 'Java', 'Sketch', 'InVision', 'Zeplin'],
    url: 'https://www.behance.net/gallery/117057307/Area-do-Cliente-EBANX',
    cover: '/behance/ebanx-area-do-cliente.webp',
  },
  {
    slug: 'praca-de-bolso-do-ciclista',
    title: 'Praça de Bolso do Ciclista',
    year: '2016',
    category: 'Sites & Plataformas',
    summary: 'Site voluntário para a praça que virou símbolo da ocupação criativa de Curitiba.',
    description: [
      'Como uma planta que floresce em ambiente inóspito, uma praça toma o lugar de um terreno abandonado no centro de Curitiba. Em pouco tempo, torna-se palco da efervescência cultural local e símbolo de um movimento pela ocupação criativa da cidade.',
      'Projeto voluntário desenvolvido para promover esse palco cultural e simbólico criado coletivamente.',
    ],
    role: 'Desenvolvimento web',
    tools: ['HTML5', 'CSS3', 'jQuery', 'Adobe Photoshop', 'Adobe Illustrator'],
    credits: 'Layout: Martim Fernandes (Agência IMAM) · Desenvolvimento: Celso Fabri Junior',
    url: 'https://www.behance.net/gallery/35613327/Praca-de-Bolso-do-Ciclista',
    cover: '/behance/praca-de-bolso-do-ciclista.webp',
  },
  {
    slug: 'billie-brothers',
    title: 'Billie Brothers',
    year: '2015',
    category: 'Sites & Plataformas',
    summary: 'Novo site da marca curitibana de moda para a campanha Primavera 2015 “Go use it”.',
    description: [
      'A tradicional marca de roupas curitibana Billie Brothers completou 20 anos e passou por uma grande reformulação em lojas e coleções.',
      'Para reposicionar a marca, a campanha Primavera 2015 — “Go use it” — ganhou um novo website, além de mídia externa, PDV, ensaio fotográfico e vídeo-ensaio da nova coleção.',
    ],
    role: 'Produção web',
    tools: ['WordPress', 'Adobe Photoshop', 'Adobe Illustrator'],
    credits:
      'Agência IMAM · Direção de criação: Martim Fernandes · Direção de arte: Rafael Russo · Redação: Marcelo Russo · Fotografia: Antônio Wolff',
    url: 'https://www.behance.net/gallery/35524863/Billie-Brothers',
    cover: '/behance/billie-brothers.webp',
  },
  {
    slug: 'ronaldo-academy',
    title: 'Website Ronaldo Academy',
    year: '2015',
    category: 'Sites & Plataformas',
    summary: 'Site da academia de futebol do Ronaldo Fenômeno, com vídeo, parallax e estrutura responsiva.',
    description: [
      'Um dos grandes trabalhos realizados pela IMAM em 2015 foi o site da academia de futebol do Ronaldo Fenômeno — o primeiro trabalho entre a agência e o R9.',
      'O site, com componentes de vídeo, efeitos de parallax e estrutura responsiva, é um meio de comunicação tanto para alunos quanto para empresários interessados em adquirir uma franquia da Ronaldo Academy.',
      'À época, o projeto já tinha unidades em São Paulo, com planos de expansão pelo Brasil e para China, EUA e Rússia.',
    ],
    role: 'Programação',
    tools: ['WordPress', 'HTML5', 'JavaScript', 'jQuery', 'Adobe Photoshop', 'Adobe Illustrator'],
    credits:
      'Agência IMAM · Direção de criação: Marcelo Russo · Direção de arte: Rafael Russo e Ale Coxinha · Redação: Gustavo “Bu”',
    url: 'https://www.behance.net/gallery/35508775/Website-Ronaldo-Academy-%282015%29',
    cover: '/behance/ronaldo-academy.webp',
  },
  {
    slug: 'm-sul-publicidade',
    title: 'M-SUL Publicidade',
    year: '2015',
    category: 'Sites & Plataformas',
    summary: 'Site institucional desenvolvido na Agência IMAM.',
    description: [
      'Site institucional da M-SUL Publicidade, projeto desenvolvido na Agência IMAM.',
    ],
    role: 'Desenvolvimento web',
    tools: ['WordPress'],
    credits: 'Agência IMAM · Em parceria com Cezar Luiz',
    url: 'https://www.behance.net/gallery/27017345/M-SUL-Publicidade',
    cover: '/behance/m-sul-publicidade.webp',
  },
  {
    slug: 'queens-snooker-burger-bar',
    title: "Queen's Snooker Burger Bar",
    year: '2014',
    category: 'Branding',
    summary: 'Manual de marca e padronização de logo — trabalho de conclusão de curso.',
    description: [
      'Trabalho de conclusão de curso nas Faculdades Opet: manual de marca e padronização da logo do Queen’s Snooker Burger Bar, em Curitiba.',
      'O case cobre a construção da marca, malha de proporção, usos permitidos e as aplicações no ambiente do bar.',
    ],
    role: 'Identidade visual',
    tools: ['Adobe Photoshop'],
    credits: 'Trabalho de Conclusão de Curso — Faculdades Opet',
    url: 'https://www.behance.net/gallery/24502621/Queens-Snooker-Burger-Bar',
    cover: '/behance/queens-snooker-burger-bar.webp',
  },
]
