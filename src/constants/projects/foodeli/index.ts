import { SKILLS } from '../../skills'

import type { Project } from '@/types/project'
import type { Translations } from '@/types/translations'

import desktop from './images/desktop.webp'
import desktop_2 from './images/desktop_2.webp'
import mobile from './images/mobile.webp'

export const foodeli = (t: Translations['projects']): Project => ({
  id: 'foodeli',
  name: 'Foodeli',
  skills_used: [SKILLS.ts, SKILLS.git, SKILLS.next, SKILLS.tailwind],
  primary_image: { src: desktop.src },
  images: [{ src: desktop.src }, { src: desktop_2.src }, { src: mobile.src }],
  description: t.foodeli.description,
  description_2: t.foodeli.description_2,
  link: 'https://v2-foodeli.vercel.app',
  repo: 'https://github.com/AlexJhordan/landing-page',
})
