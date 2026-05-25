import { useEffect, useState } from 'react'

const SECTION_IDS = ['hero', 'about', 'xp', 'projects', 'skills', 'certs', 'passions', 'contact']

export function useActiveSection() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const onScroll = () => {
      const sc = window.scrollY
      let current = SECTION_IDS[0]!
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop - 200 <= sc) current = id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return active
}
