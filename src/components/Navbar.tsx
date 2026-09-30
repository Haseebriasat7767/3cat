import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SITE } from '@/lib/site'

const links = [
  { label: 'The Menu', href: '#menu' },
  { label: 'From Scratch', href: '#craft' },
  { label: 'Favorites', href: '#favorites' },
  { label: 'Catering', href: '#catering' },
  { label: 'Visit', href: '#visit' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-[0.5px] border-border bg-[rgba(26,13,26,0.90)] backdrop-blur-[16px]">
      <nav className="flex h-[60px] items-center justify-between px-[6%]">
        {/* Brand */}
        <a
          href="#top"
          className="font-serif text-[22px] font-bold italic leading-none tracking-[0.06em] text-primary"
        >
          3CAT
        </a>

        {/* Center links */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-[11px] font-light uppercase tracking-[0.15em] text-foreground/80 transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <a
            href={SITE.orderUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: 'outline' }), 'hidden py-2 text-[13px] lg:inline-flex')}
          >
            Order Online
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center text-foreground transition-colors duration-200 hover:text-primary md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="overflow-hidden border-t-[0.5px] border-border bg-[rgba(26,13,26,0.97)] md:hidden"
          >
            <div className="flex flex-col gap-5 px-[6%] py-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-sans text-[11px] font-light uppercase tracking-[0.15em] text-foreground/80 transition-colors duration-200 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={SITE.orderUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: 'outline' }), 'mt-2 w-max')}
              >
                Order Online
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
