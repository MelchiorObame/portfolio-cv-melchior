import { useEffect } from 'react'

export function useCustomCursor() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover)').matches) return

    let x = 0,
      y = 0,
      tx = 0,
      ty = 0
    const ring = document.getElementById('cursor-ring')
    const dot = document.getElementById('cursor-dot')
    if (!ring || !dot) return

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
      dot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`
    }

    let rafId: number
    const tick = () => {
      x += (tx - x) * 0.18
      y += (ty - y) * 0.18
      ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    window.addEventListener('mousemove', onMove)

    const add = () => document.body.classList.add('cursor-hover')
    const rem = () => document.body.classList.remove('cursor-hover')

    const update = () => {
      const interactives = document.querySelectorAll('a, button, .skill-chip, .project-card, .link-row')
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', add)
        el.addEventListener('mouseleave', rem)
      })
    }
    update()
    const observer = new MutationObserver(update)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])
}
