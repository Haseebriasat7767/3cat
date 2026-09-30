import { motion } from 'motion/react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { EASE_OUT, SITE } from '@/lib/site'
import heroImg from '@/assets/hero.jpg'

const chips = [
  'Handmade Mochi Daily',
  'Organic Straus Milk',
  'Fresh Local Fruit',
  'House-Whipped Mousse',
  'Open ’til 10:30 PM',
]

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      {/* Background photography */}
      <img
        src={heroImg}
        alt="Dimly lit handcrafted tea atelier — glass jars of tea leaves, fresh fruit, and a warm amber pendant light"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          width: '100%',
          height: '100%',
          position: 'absolute',
          inset: 0,
        }}
      />

      {/* Effect 1: background overflow brand text */}
      <span className="bg-brand-text hidden md:block" aria-hidden="true">
        3CAT
      </span>

      {/* Effect 3: dual-zone gradient overlay */}
      <div className="hero-overlay absolute inset-0 z-[1]" aria-hidden="true" />

      {/* Content block */}
      <div className="absolute bottom-[10vh] left-1/2 z-10 w-[90%] max-w-[800px] -translate-x-1/2">
        <div className="text-left sm:text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
            className="font-display mb-5 text-[clamp(56px,7.5vw,132px)] leading-[1.02] tracking-[-0.02em] text-[#f5ede0]"
          >
            Handcrafted. Never Hurried.
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE_OUT }}
            className="mx-0 mb-8 max-w-[520px] font-serif text-[19px] font-light leading-[1.6] text-[#f5ede0]/80 sm:mx-auto"
          >
            A handcrafted menu of teas, smoothies, and mousse drinks — organic milk from Straus,
            fresh fruit from local farmers, and toppings made from scratch every morning.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE_OUT }}
            className="mb-9 flex flex-wrap justify-start gap-4 sm:justify-center"
          >
            <a href="#menu" className={buttonVariants({ variant: 'default' })}>
              Explore the Menu
            </a>
            <a
              href={SITE.orderUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: 'outline' }), 'text-[#f5ede0]')}
            >
              Order Online
            </a>
          </motion.div>

          {/* Effect 2: animated chip strip */}
          <div className="flex flex-wrap justify-start gap-2.5 sm:justify-center">
            {chips.map((chip, index) => (
              <motion.span
                key={chip}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5, ease: 'easeOut' }}
                className="chip"
              >
                {chip}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
