type Project = {
  description: string
  description_2: string
  comment?: string
}
type Projects = { [key: string]: Project }

export type Translations = {
  projects: Projects
  section_1: {
    description: string
  }
  section_2: {
    title: string
    subtitle: string
    subtitle_2: string
    description: string
  }
  button: {
    show_more: string
    projects: string
    contact: string
    go_to_projects: string
    go_to_code: string
    go_to_website: string
  }
}
