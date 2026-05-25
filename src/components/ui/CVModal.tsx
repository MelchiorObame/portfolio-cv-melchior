import * as Dialog from '@radix-ui/react-dialog'
import { motion, AnimatePresence } from 'framer-motion'

interface CVModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CVModal({ open, onOpenChange }: CVModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-[10px] z-[1000]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                className="fixed left-1/2 top-1/2 z-[1001] w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-card bg-[var(--bg)] border border-[var(--line)] p-10 shadow-2xl focus:outline-none"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 400, damping: 30 } }}
                exit={{ opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.18 } }}
              >
                <Dialog.Title className="font-display italic text-4xl text-ink mb-3">
                  CV.pdf
                </Dialog.Title>
                <Dialog.Description className="font-mono text-xs text-ink-3 mb-8">
                  Melchior Obame — AI / ML / MLOps Senior Engineer
                </Dialog.Description>

                <a
                  href="/cv/Profile.pdf"
                  download="CV-Melchior-Obame.pdf"
                  className="inline-flex items-center gap-3 font-mono text-sm px-6 py-4 rounded-full bg-ink text-[var(--bg)] hover:bg-accent hover:text-accent-ink transition-all duration-300 hover:-translate-y-0.5"
                >
                  Télécharger le CV ↓
                </a>

                <Dialog.Close className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border border-[var(--line)] text-ink-3 hover:text-ink hover:border-ink transition-colors font-mono text-sm">
                  ✕
                </Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
