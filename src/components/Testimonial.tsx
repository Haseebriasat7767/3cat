import { motion } from 'motion/react'

export default function Testimonial() {
  return (
    <section className="bg-background px-[6%] py-20 lg:py-[80px]">
      <motion.blockquote
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto max-w-[680px] border-l border-primary pl-7"
      >
        <p className="font-serif text-[28px] font-bold italic leading-[1.4] text-foreground">
          “If you’re a fan of actual fruit in your drink, you’ll like this place. My mango drink
          tasted like freshly blended mango.”
        </p>
        <footer className="mt-5 font-sans text-[12px] font-light tracking-[0.12em] text-primary">
          — Verified Yelp Review
        </footer>
      </motion.blockquote>
    </section>
  )
}
