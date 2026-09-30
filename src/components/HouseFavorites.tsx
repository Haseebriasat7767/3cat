import { motion } from 'motion/react'
import { EASE_OUT } from '@/lib/site'

const favorites = [
  {
    tier: '#1 Most Loved',
    name: 'Mochi Mango',
    desc: 'Fresh mango churned with milk and whipping cream, loaded with soft handmade rice mochi and a wafer-crunch finish.',
    price: '$8.99',
  },
  {
    tier: 'Signature',
    name: 'Avomango Sweet Dew',
    desc: 'Creamy avocado and coconut milk layered over house cheese mousse, agar boba, and a bright grapefruit–mango finish.',
    price: '$8.99',
  },
  {
    tier: 'Most Ordered',
    name: 'Mochi Matcha',
    desc: 'Whisked matcha over house milk with soft handmade rice mochi — grassy, creamy, and quietly addictive.',
    price: '$8.69',
  },
]

export default function HouseFavorites() {
  return (
    <section id="favorites" className="scroll-mt-[60px] bg-background px-[6%] py-[120px]">
      {/* Header */}
      <header className="mb-16">
        <p className="label-eyebrow mb-4">House Favorites</p>
        <h2 className="font-display text-[42px] leading-[1.05] text-foreground">
          Three cups. One story.
        </h2>
      </header>

      {/* Cards */}
      <div className="grid gap-6 lg:grid-cols-3">
        {favorites.map((favorite, index) => (
          <motion.article
            key={favorite.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: EASE_OUT }}
            className="cursor-pointer border-[0.5px] border-border bg-white/[0.02] px-8 py-10 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-primary"
          >
            <p className="mb-3 font-serif text-[12px] font-light uppercase tracking-[0.15em] text-primary">
              {favorite.tier}
            </p>
            <h3 className="font-display mb-4 text-[30px] leading-[1.05] text-foreground">
              {favorite.name}
            </h3>
            <p className="mb-7 font-serif text-[16px] font-light leading-[1.65] text-muted-foreground">
              {favorite.desc}
            </p>
            <div className="mb-5 h-px w-full bg-primary/50" />
            <p className="font-display text-[26px] text-foreground">{favorite.price}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
