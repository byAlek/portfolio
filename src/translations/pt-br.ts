import type { Translations } from '@/types/translations'

const bi = (x: string) => `<i><b>${x}</b></i>`

const projects: Translations['projects'] = {
  foodeli: {
    description:
      'Landing page de um restaurante de comida rápida, feito em Next.js com uso de APIs para exibir dados dinâmicos.',
    description_2: 'Rápida, responsiva e intuitiva.',
  },
  male_grooming: {
    description:
      'Landing page de um restaurante de comida rápida, feito em Next.js com uso de APIs para exibir dados dinâmicos.',
    description_2: 'Rápida, responsiva e intuitiva.',
  },
}

export const pt_br: Translations = {
  projects,
  section_1: {
    description:
      'Dev Front-End com mais de 1 ano estudando diversas tecnologias, sempre buscando aprender, evoluir e contribuir para projetos que desafiem minha capacidade.',
  },
  section_2: {
    title: 'Sobre mim',
    subtitle: `Olá, me chamo Alex, sou desenvolvedor ${bi('Fron-end')}.`,
    subtitle_2: 'Mais de 2 anos de experiência.',
    description: `São algumas das minhas tecnologias/ferramentas tipicas ${bi('favoritas')} ou com as quais ${bi('trabalhei')}.`,
  },
  button: {
    show_more: 'Mostrar mais',
    projects: 'Projetos',
    contact: 'Contato',
    go_to_projects: 'Ver projetos',
    go_to_code: 'Código',
    go_to_website: 'Site',
  },
}
