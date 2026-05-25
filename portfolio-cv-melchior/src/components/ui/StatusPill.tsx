export function StatusPill() {
  return (
    <div className="inline-flex items-center gap-2.5 px-4 py-2 border border-[var(--line)] rounded-full bg-card backdrop-blur-[8px] font-mono text-xs mb-8">
      <span className="relative w-2 h-2 rounded-full bg-[#2dba6c]">
        <span className="absolute -inset-1 rounded-full bg-[#2dba6c] animate-[pulse_2s_ease-out_infinite] opacity-50" />
      </span>
      <span>Disponible — Paris &amp; remote</span>
    </div>
  )
}
