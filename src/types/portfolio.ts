export type Palette = 'cream' | 'ink' | 'moss' | 'rose'
export type Density = 'comfy' | 'compact'
export type AnimLevel = 'marked' | 'subtle' | 'none'

export interface ThemeConfig {
  palette: Palette
  density: Density
  animations: AnimLevel
  accent: string
}

export interface Stat {
  value: string
  countTo: number | null
  suffix: string
  label: string
}

export interface Experience {
  id: string
  period: string
  duration: string
  company: string
  logo?: string          // chemin vers le logo (public/logos/…) — optionnel
  role: string
  via: string | null
  location: string | null
  desc: string
  tags: string[]
  children?: Experience[] // sous-missions (consulting)
}

export interface TitlePart {
  text: string
  italic?: boolean
}

export interface Project {
  id: string
  featured: boolean
  span: 4 | 5 | 6 | 7 | 12
  tag: string
  titleParts: TitlePart[][]
  desc: string
  tech: string[]
  href: string
}

export interface Skill {
  name: string
  highlight: boolean
}

export interface SkillCategory {
  id: string
  title: string
  skills: Skill[]
}

export interface Education {
  id: string
  years: string
  school: string
  degree: string
}

export interface Certification {
  id: string
  badge: string
  issuer: string
  name: string
  level: string
  meta: string
  verifyHref: string
}

export interface Language {
  id: string
  name: string
  level: string
  percent: number
}

export interface Passion {
  id: string
  num: string
  visual: 'dessin' | 'sport' | 'read'
  title: string
  desc: string
}

export interface SocialLink {
  id: string
  num: string
  name: string
  nameItalic?: string
  host: string
  href: string
}
