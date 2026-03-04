import type { Project } from '@/types/project'
import type { Translations } from '@/types/translations'
import { foodeli } from './foodeli'
import { male_grooming } from './male-grooming'

export const PROJECTS = (t: Translations['projects']): Project[] => [foodeli(t), male_grooming(t)]
