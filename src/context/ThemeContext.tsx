import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ThemeConfig, Palette, Density, AnimLevel } from '../types/portfolio'

interface ThemeContextValue {
  theme: ThemeConfig
  setPalette: (p: Palette) => void
  setDensity: (d: Density) => void
  setAnimations: (a: AnimLevel) => void
  setAccent: (hex: string) => void
}

const defaultTheme: ThemeConfig = {
  palette: 'ink',
  density: 'compact',
  animations: 'marked',
  accent: '#ff5a1f',
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeConfig>(() => {
    const tweaks = ((window as unknown) as Record<string, unknown>)['__TWEAKS'] as Partial<ThemeConfig> | undefined
    return { ...defaultTheme, ...tweaks }
  })

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-palette', theme.palette)
    root.setAttribute('data-density', theme.density)
    root.setAttribute('data-anim', theme.animations)
    if (theme.palette === 'cream') {
      root.style.setProperty('--accent', theme.accent)
    } else {
      root.style.removeProperty('--accent')
    }
  }, [theme])

  const setPalette    = useCallback((p: Palette)   => setTheme(t => ({ ...t, palette: p })), [])
  const setDensity    = useCallback((d: Density)   => setTheme(t => ({ ...t, density: d })), [])
  const setAnimations = useCallback((a: AnimLevel) => setTheme(t => ({ ...t, animations: a })), [])
  const setAccent     = useCallback((hex: string)  => setTheme(t => ({ ...t, accent: hex })), [])

  const value = useMemo(
    () => ({ theme, setPalette, setDensity, setAnimations, setAccent }),
    [theme, setPalette, setDensity, setAnimations, setAccent],
  )

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
