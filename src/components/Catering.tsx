import { motion } from 'motion/react'
import { SITE } from '@/lib/site'

export default function Catering() {
  return (
    <section
      id="catering"
      className="scroll-mt-[60px] border-y border-border bg-[rgba(26,13,26,0.97)] px-[6%] py-[100px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="mx-auto max-w-[760px] text-center"
      >
        <p className="label-eyebrow mb-5">Catering & Events</p>

        <h2 className="font-display mb-5 text-[clamp(36px,5vw,72px)] leading-[1.02] text-foreground">
          The Menu Is Handcrafted. Your Event Can Be Too.
        </h2>

        <p className="mb-9 font-serif text-[18px] font-light leading-[1.7] text-muted-foreground">
          From office afternoons to birthdays and study nights, we bring the bar to you — mochi,
          mousse, and all. Tell us the crowd, and our team will build a menu around it.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <span className="chip chip-lg">10+ Cup Orders</span>
          <span className="chip chip-lg">48 Hours’ Notice</span>
        </div>

        <a
          href={SITE.phoneHref}
          className="mt-8 inline-block cursor-pointer font-sans text-[13px] font-light tracking-[0.04em] text-primary underline underline-offset-[6px] transition-colors duration-200 hover:text-foreground"
        >
          Enquire about catering →
        </a>
      </motion.div>
    </section>
  )
}
