import type { Translations } from '@/types/translations'

const bi = (x: string) => `<b><i>${x}</i></b>`

const projects: Translations['projects'] = {
  foodeli: {
    description:
      'Página de destino para un restaurante de comida rápida, hecha en Next.js con uso de APIs para mostrar datos dinámicos.',
    description_2: 'Rápida, responsive e intuitiva.',
  },
}

export const es: Translations = {
  projects,
  section_1: {
    description:
      'Desarrollador Front-End con más de 1 año estudiando diversas tecnologías, siempre buscando aprender, evolucionar y contribuir a proyectos que desafíen mis capacidades.',
  },
  section_2: {
    title: 'Sobre mí',
    subtitle: `Hola, me llamo Alex, soy desarrollador ${bi('Front-end')}.`,
    subtitle_2: 'Más de 2 años de experiencia.',
    description: `Algunas de mis tecnologías/herramientas típicas ${bi('favoritas')} o con las que he ${bi('trabajado')}.`,
  },
  button: {
    show_more: 'Mostrar más',
    projects: 'Proyectos',
    contact: 'Contacto',
    go_to_projects: 'Ver proyectos',
    go_to_code: 'Código',
    go_to_website: 'Sitio web',
  },
}
