import { motion } from 'motion/react'

const categories = [
  {
    name: 'Signature',
    desc: 'Mochi Mango, Avomango Sweet Dew, and Jasmine Ube Burst — the cups that made our name.',
    price: 'from $8.99',
  },
  {
    name: 'Smoothies & Frost',
    desc: 'Real fruit churned thick — avocado, mango, white peach, matcha — plus the returning RiceFrost.',
    price: 'from $8.69',
  },
  {
    name: 'Mousse & Tea',
    desc: 'House-whipped cheese mousse crowning jasmine, matcha, and fresh-fruit teas.',
    price: 'from $8.49',
  },
  {
    name: 'Fresh Fruit & Tea',
    desc: 'Cold-pressed fruit over jasmine and oolong. Lime Explosion, Yuzu Berry, Super Orange.',
    price: 'from $7.99',
  },
]

export default function MenuRegions() {
  return (
    <section id="menu" className="scroll-mt-[60px] bg-background px-[6%] py-[120px]">
      {/* Header */}
      <header className="mb-[72px]">
        <p className="label-eyebrow mb-4">The Menu by Category</p>
        <h2 className="font-display text-[42px] leading-[1.05] text-foreground">
          Small batches. Big conviction.
        </h2>
      </header>

      {/* Category rows */}
      <div>
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
            className="region-row group flex cursor-pointer flex-col gap-4 border-t border-border py-9 last:border-b sm:flex-row sm:items-center sm:justify-between lg:py-[36px]"
          >
            {/* Left column */}
            <div className="max-w-[560px]">
              <h3 className="font-display text-[26px] leading-[1.1] text-foreground sm:text-[32px]">
                {category.name}
              </h3>
              <p className="mt-2 font-serif text-[15px] font-light leading-[1.6] text-muted-foreground">
                {category.desc}
              </p>
            </div>

            {/* Right column */}
            <div className="flex items-center gap-6 sm:shrink-0 sm:gap-[24px]">
              <span className="font-serif text-[14px] font-light text-primary">
                {category.price}
                <span className="text-muted-foreground"> / cup</span>
              </span>
              <span className="font-serif text-[24px] font-bold italic leading-none text-primary transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
