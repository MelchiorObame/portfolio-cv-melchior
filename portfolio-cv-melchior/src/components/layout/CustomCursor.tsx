import { useCustomCursor } from '../../hooks/useCustomCursor'

export function CustomCursor() {
  useCustomCursor()
  return (
    <>
      <div id="cursor-ring" />
      <div id="cursor-dot" />
    </>
  )
}
