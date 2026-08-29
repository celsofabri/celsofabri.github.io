// Edite este arquivo para atualizar as informações exibidas no site.
// Veja o README.md para instruções detalhadas de cada campo.

export const profile = {
  name: 'Celso Fabri Junior',
  title: 'Software Engineering Manager & Front-End Developer',
  tagline:
    'Construo produtos digitais com foco em experiência do usuário, performance e times de alta performance.',
  location: 'Curitiba, Paraná, Brasil',
  company: 'iFood',
  // Frase curta usada na Home, embaixo do título.
  heroSubtitle:
    'Atuo na fronteira entre engenharia, design e gestão — hoje como Software Engineering Manager, com raízes em front-end e UX/UI.',

  // Texto mais completo usado na página "Sobre".
  bio: `Sou Software Engineering Manager, desenvolvedor front-end e designer de UX/UI, atualmente na iFood, em Curitiba.
Lidero um time de plataforma de engenharia com o objetivo de tornar o dia a dia dos demais times mais eficiente, promovendo autonomia e resultados sustentáveis. Minha motivação diária vem de buscar soluções que façam a diferença, unindo minha experiência como desenvolvedor front-end e UX/UI designer à vontade de criar impactos positivos e duradouros para pessoas e negócios.
Ao longo de mais de 10 anos de carreira, passei por agências de publicidade, e-commerce, fintechs e plataformas de larga escala, sempre transitando entre código, design e liderança de pessoas.`,

  avatar: '/avatar.jpg',

  github: 'https://github.com/celsofabri',
  githubUsername: 'celsofabri',
  linkedin: 'https://www.linkedin.com/in/celsofabri/',
  email: 'celso.fabri@gmail.com',

  skills: [
    'Team Leadership',
    'Gestão de Times',
    'JavaScript',
    'TypeScript',
    'React',
    'Vue.js',
    'Kotlin',
    'GraphQL',
    'Ruby on Rails',
    'PHP',
    'WordPress',
    'HTML & CSS',
    'UX/UI Design',
    'Android & iOS',
    'Kanban & Scrum',
  ],

  // Empresas agrupadas (estilo LinkedIn): cada item é uma empresa, com uma ou
  // mais passagens (roles) dentro dela. Adicione `logo: '/logos/<arquivo>.svg'`
  // em qualquer empresa para exibir a logo real (coloque o arquivo em
  // public/logos/). Sem esse campo, um badge com as iniciais é exibido
  // automaticamente.
  experience: [
    {
      company: 'iFood',
      logo: '/logos/ifood.svg',
      location: 'Curitiba, Paraná, Brasil',
      roles: [
        {
          role: 'Software Engineering Manager',
          period: 'outubro de 2022 — atual',
          highlights: [
            'Responsável por times multidisciplinares com foco em front-end (Vue.js), back-end (Kotlin) e mobile (Android e iOS).',
            'Atuação em serviços de envio e coleta de eventos, configurações remotas e experimentos da plataforma, incluindo o ferramental de SDKs da tribo de Remote Config e Analytics.',
            'Análise e monitoramento de custos dos serviços relacionados à squad.',
            'Gerenciamento de atividades do time através de cerimônias de planejamento semanal, dailies, retrospectivas e 1:1 com liderados.',
            'Planejamento e elaboração de objetivos e resultados-chave (OKRs) junto ao time, pares e liderança direta.',
          ],
        },
        {
          role: 'SR Front-End Developer',
          period: 'agosto de 2021 — outubro de 2022',
          highlights: [
            'Atuação na engenharia core da empresa, em plataforma de segmentações, envio de eventos, configurações remotas e testes A/B.',
            'Desenvolvimento e manutenção do portal administrativo da plataforma em Vue.js.',
            'Desenvolvimento e manutenção do SDK JS (TypeScript) de Remote Config e Analytics.',
            'Participação ativa em chapter de front-end, criando documentação de boas práticas para construção de bibliotecas.',
            'Contribuições e manutenção em projetos back-end em Kotlin.',
          ],
        },
      ],
    },
    {
      company: 'Delivery Much Brasil',
      logo: '/logos/deliverymuch.png',
      location: 'Curitiba, Paraná, Brasil',
      roles: [
        {
          role: 'SR Front-End Developer',
          period: 'março de 2021 — julho de 2021',
          highlights: [
            'Desenvolvimento e manutenção do sistema de backoffice da empresa em Vue.js.',
            'Participação ativa em chapter de front-end para definições de arquitetura e mentoria de outros desenvolvedores.',
            'Testes de usabilidade junto à equipe de design com usuários reais.',
          ],
        },
      ],
    },
    {
      company: 'Delivery Center',
      logo: '/logos/deliverycenter.jpg',
      location: 'Curitiba, Paraná, Brasil',
      roles: [
        {
          role: 'PL Front-End Developer',
          period: 'novembro de 2020 — fevereiro de 2021',
          highlights: [
            'Desenvolvimento e manutenção de backoffice interno para cadastro de produtos utilizando React e GraphQL.',
          ],
        },
      ],
    },
    {
      company: 'ateliware software',
      logo: '/logos/ateliware.png',
      location: 'Curitiba, Paraná, Brasil',
      roles: [
        {
          role: 'SR Front-End Developer',
          period: 'setembro de 2020 — novembro de 2020',
          highlights: [
            'Responsável pelo desenvolvimento do novo site e blog da empresa utilizando Gatsby e GraphQL, com GraphCMS para gerenciamento de conteúdo.',
          ],
        },
      ],
    },
    {
      company: 'Creditas',
      logo: '/logos/creditas.png',
      location: 'Curitiba, Paraná',
      roles: [
        {
          role: 'PL Front-End Developer',
          period: 'agosto de 2019 — setembro de 2020',
          highlights: [
            'Desenvolvimento e manutenção do Simulador de Crédito B2C da Bcredi em React.',
            'Desenvolvimento e manutenção do Design System da empresa em React.',
            'Responsável pela reformulação do blog da Bcredi em WordPress.',
            'Desenvolvimento e manutenção do Simulador de Crédito B2B de Parceiros em React.',
          ],
        },
      ],
    },
    {
      company: 'Menthor.co',
      logo: '/logos/menthor.svg',
      location: 'Curitiba e Região, Brasil',
      roles: [
        {
          role: 'PL Front-End Developer',
          period: 'julho de 2018 — março de 2020',
          highlights: [
            'Desenvolvimento e manutenção de novas funcionalidades do sistema em React, atualizações de interface e integração com a biblioteca de livros da Amazon.',
          ],
        },
      ],
    },
    {
      company: 'MadeiraMadeira',
      logo: '/logos/madeiramadeira.svg',
      location: 'Curitiba, Paraná',
      roles: [
        {
          role: 'SR Front-End Developer / UX-UI Designer',
          period: 'junho de 2019 — julho de 2019',
          highlights: [
            'Desenvolvimento e manutenção do sistema de backoffice em PHP.',
            'Responsável pela arquitetura, boas práticas e implementação da SPA com React no novo backoffice.',
          ],
        },
      ],
    },
    {
      company: 'EBANX',
      logo: '/logos/ebanx.svg',
      location: 'Curitiba e Região, Brasil',
      roles: [
        {
          role: 'PL Front-End Developer',
          period: 'agosto de 2016 — maio de 2019',
          highlights: [
            'Responsável pela migração da conta EBANX de Ruby on Rails para nova arquitetura em SPA (Single Page Application) com React.',
            'Responsável pelo novo site B2C do EBANX em WordPress, com suporte a 6 idiomas.',
          ],
        },
        {
          role: 'JR Web Developer',
          period: 'março de 2018 — maio de 2019',
          highlights: [
            'Desenvolvimento web da conta EBANX em monorepo Ruby on Rails, com foco em front-end (HTML, CSS e JS).',
            'Manutenção do sistema core de pagamentos do EBANX em PHP.',
          ],
        },
      ],
    },
    {
      company: 'Likewise',
      location: 'Curitiba e Região, Brasil',
      roles: [
        {
          role: 'PL Front-End Developer',
          period: 'agosto de 2016 — dezembro de 2016',
          highlights: [
            'Desenvolvimento de projetos institucionais em WordPress e sites estáticos.',
            'Desenvolvimento de e-mail marketing para campanhas.',
          ],
        },
      ],
    },
    {
      company: 'Snowman Labs',
      location: 'Curitiba e Região, Brasil',
      roles: [
        {
          role: 'JR Front-End Developer',
          period: 'março de 2016 — agosto de 2016',
          highlights: [
            'Desenvolvimento de portais administrativos de aplicativos móveis para gerenciamento de conteúdo e configurações utilizando React.',
            'Desenvolvimento do site institucional multi-site e multi-idioma da empresa em WordPress.',
          ],
        },
      ],
    },
    {
      company: 'Agência IMAM — Publicidade e Propaganda',
      logo: '/logos/imam.svg',
      location: 'Curitiba, Paraná',
      roles: [
        {
          role: 'PL Front-End Developer / UX-UI Designer',
          period: 'dezembro de 2014 — fevereiro de 2016',
          highlights: [
            'Criação de layouts e interfaces web para peças digitais utilizando Sketch.',
            'Desenvolvimento web front-end e back-end com WordPress, Joomla e Drupal.',
            'Desenvolvimento de e-mail marketing e elemídias (Flash) para campanhas.',
          ],
        },
        {
          role: 'Front-End Developer / UX-UI Designer Intern',
          period: 'julho de 2013 — janeiro de 2014',
          highlights: [
            'Criação e desenvolvimento de websites, landing pages e e-mail marketing.',
          ],
        },
      ],
    },
    {
      company: 'Agência WX',
      logo: '/logos/wx.png',
      location: 'Curitiba e Região, Brasil',
      roles: [
        {
          role: 'PL Front-End Developer',
          period: 'fevereiro de 2014 — novembro de 2014',
          highlights: [
            'Desenvolvimento de sites institucionais e lojas com WooCommerce em WordPress.',
            'Manutenção de framework/tema próprio de WordPress e de sistema interno de back-end em PHP.',
          ],
        },
      ],
    },
    {
      company: 'Andaraki Calçados',
      logo: '/logos/andaraki.svg',
      location: 'Curitiba, Paraná',
      roles: [
        {
          role: 'JR Web Designer',
          period: 'outubro de 2012 — julho de 2013',
          highlights: [
            'Desenvolvimento e criação de interfaces web, e-mail marketing e landing pages para campanhas.',
            'Gerenciamento da loja no e-commerce junto à plataforma Rakuten e de campanhas no Google AdSense.',
          ],
        },
      ],
    },
  ],

  // Adicione `logo: '/logos/<arquivo>.svg'` em qualquer instituição para
  // exibir a logo real (coloque o arquivo em public/logos/). Sem esse campo,
  // um badge com as iniciais é exibido automaticamente.
  education: [
    {
      degree: 'Pós-graduação Lato Sensu — Especialização em Inteligência Artificial Aplicada',
      institution: 'Universidade Federal do Paraná',
      logo: '/logos/ufpr.svg',
      period: 'janeiro de 2026 — agosto de 2027',
    },
    {
      degree: 'Pós-graduação Lato Sensu — Especialização em Desenvolvimento Ágil de Software',
      institution: 'Universidade Federal do Paraná',
      logo: '/logos/ufpr.svg',
      period: 'fevereiro de 2025 — agosto de 2026',
    },
    {
      degree: 'Pós-graduação Lato Sensu — Liderança e Gestão em Tecnologia',
      institution: 'Escola Conquer',
      logo: '/logos/conquer.png',
      period: 'julho de 2024 — janeiro de 2025',
    },
    {
      degree: 'CST — Tecnologia em Produção Multimídia (Web Design)',
      institution: 'Faculdade de Tecnologia Opet',
      logo: '/logos/opet.png',
      period: 'fevereiro de 2012 — dezembro de 2014',
    },
  ],

  certifications: [
    'OWASP Top 10 — Web Application Security for Absolute Beginners',
    'SWADA — Security Web Application Development Awareness',
    'Comunicação para quem comunica',
    'Formando Campeões: Liderança F.C.',
    'TypeScript — aprenda do zero ao avançado na prática',
  ],

  languages: [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês', level: 'Avançado (Professional Working)' },
  ],
}
