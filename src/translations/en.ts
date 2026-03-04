import type { Translations } from '@/types/translations'

const bi = (x: string) => `<b><i>${x}</i></b>`

const projects: Translations['projects'] = {
  foodeli: {
    description:
      'Landing page for a fast food restaurant, built with Next.js using APIs to display dynamic data.',
    description_2: 'Fast, responsive, and intuitive.',
  },
}

export const en: Translations = {
  projects,
  section_1: {
    description:
      'Front-End Developer with over 1 year of studying various technologies, always seeking to learn, evolve and contribute to projects that challenge my capabilities.',
  },
  section_2: {
    title: 'About me',
    subtitle: `Hello, my name is Alex, I'm a ${bi('Front-end')} developer.`,
    subtitle_2: 'Over 2 years of experience.',
    description: `Some of my typical ${bi('favorite')} technologies/tools or that I've ${bi('worked')} with.`,
  },
  button: {
    show_more: 'Show more',
    projects: 'Projects',
    contact: 'Contact',
    go_to_projects: 'View projects',
    go_to_code: 'Code',
    go_to_website: 'Website',
  },
}
