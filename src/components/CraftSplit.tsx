import { motion } from 'motion/react'
import { EASE_OUT } from '@/lib/site'
import craftImg from '@/assets/craft.jpg'

export default function CraftSplit() {
  return (
    <section id="craft" className="scroll-mt-[60px] bg-background">
      <div className="flex min-h-[560px] flex-col md:flex-row">
        {/* Left — photography */}
        <div className="relative min-h-[420px] md:w-1/2 md:min-h-[560px]">
          <img
            src={craftImg}
            alt="Artisan ingredients laid out on a dark wooden counter — fresh mango, handmade rice mochi, matcha, jasmine tea leaves, and a sealed milk tea cup"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              width: '100%',
              height: '100%',
              position: 'absolute',
              inset: 0,
            }}
          />
        </div>

        {/* Right — content */}
        <div className="flex flex-col justify-center bg-[rgba(26,13,26,0.95)] px-[6%] py-20 md:w-1/2 md:py-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: EASE_OUT }}
          >
            <p className="label-eyebrow mb-6">Made from Scratch</p>

            <h2 className="font-display mb-6 text-[clamp(32px,4vw,56px)] leading-[1.05] text-foreground">
              We choose ingredients we’d serve our own family.
            </h2>

            <p className="mb-8 font-serif text-[17px] font-light leading-[1.7] text-muted-foreground">
              Our mochi is rolled by hand and our cheese mousse whipped fresh every morning. We
              pour organic milk from Straus Family Creamery and blend fruit from local farmers.
              While others rely on shortcuts, we start from scratch — with every single cup.
            </p>

            <div>
              <span className="chip chip-lg">Cups from $7.99</span>
            </div>

            <p className="mt-6 font-serif text-[15px] font-light text-muted-foreground">
              Ask about today’s seasonal special
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
