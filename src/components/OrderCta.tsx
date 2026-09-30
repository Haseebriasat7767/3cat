import { motion } from 'motion/react'
import { buttonVariants } from '@/components/ui/button'
import { SITE } from '@/lib/site'

export default function OrderCta() {
  return (
    <section
      id="visit"
      className="scroll-mt-[60px] border-t border-border bg-background px-[6%] py-[140px] text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <h2 className="font-display mb-5 text-[clamp(36px,5.5vw,96px)] leading-[1.02] text-foreground">
          Come as you are. Stay as long as you like.
        </h2>

        <p className="mb-12 font-serif text-[18px] font-light leading-[1.7] text-muted-foreground">
          Open Daily 12pm–10:30pm · Online Ordering Until 9:55pm · Pickup & Delivery
        </p>

        <a
          href={SITE.orderUrl}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ variant: 'default', size: 'lg' })}
        >
          Order Online
        </a>

        <p className="mt-6 font-serif text-[13px] font-light text-muted-foreground/60">
          Walk-ins always welcome · No minimum order
        </p>
      </motion.div>
    </section>
  )
}
