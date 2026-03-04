import { SKILLS } from '../../skills'

import type { Project } from '@/types/project'
import type { Translations } from '@/types/translations'

import desktop from './images/desktop.webp'
import desktop_2 from './images/desktop_2.webp'
import desktop_3 from './images/desktop_3.webp'
import mobile from './images/mobile.webp'
import square from './images/square.webp'

export const male_grooming = (t: Translations['projects']): Project => ({
  id: 'male_grooming',
  name: 'Male Grooming',
  skills_used: [SKILLS.ts, SKILLS.astro, SKILLS.tailwind],
  primary_image: { src: desktop.src },
  images: [
    { src: desktop.src },
    { src: desktop_2.src },
    { src: desktop_3.src },
    { src: mobile.src },
    { src: square.src },
  ],
  description: t.foodeli.description,
  description_2: t.foodeli.description_2,
  link: 'https://male-grooming.netlify.app/',
  repo: 'https://github.com/AlexJhordan/male-grooming',
})
