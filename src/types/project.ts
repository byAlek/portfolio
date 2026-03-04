type Image = { src: string; alt?: string }

export type Project = {
  id: string
  name: string
  skills_used: string[]
  primary_image: Image
  images: Image[]
  description: string
  description_2?: string
  comment?: string
  link?: string
  repo?: string
}
