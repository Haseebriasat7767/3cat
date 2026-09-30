import { Instagram, Linkedin } from 'lucide-react'
import { TikTokIcon } from '@/components/TikTokIcon'
import { SITE } from '@/lib/site'

const socials = [
  { label: 'Instagram', href: SITE.instagram, Icon: Instagram },
  { label: 'TikTok', href: SITE.tiktok, Icon: TikTokIcon },
  { label: 'LinkedIn', href: SITE.linkedin, Icon: Linkedin },
]

export default function Footer() {
  return (
    <footer className="border-t-[0.5px] border-border bg-[rgba(10,5,10,1)] px-[6%] pb-10 pt-16">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {/* Column 1 — brand */}
        <div>
          <p className="font-serif text-[20px] font-bold italic tracking-[0.06em] text-primary">
            3CAT
          </p>
          <p className="mt-3 font-serif text-[13px] font-light leading-[1.7] text-muted-foreground">
            Handcrafted beverages & small-batch toppings. Open late.
          </p>
          <div className="mt-5 flex items-center gap-4">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`3CAT on ${label}`}
                className="text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2 — find us */}
        <div>
          <p className="mb-4 font-sans text-[11px] font-light uppercase tracking-[0.15em] text-primary">
            Find Us
          </p>
          <ul className="space-y-2 font-serif text-[14px] font-light leading-[1.7] text-muted-foreground">
            <li>{SITE.addressLine1}</li>
            <li>{SITE.addressLine2}</li>
            <li>{SITE.addressLine3}</li>
            <li>{SITE.hours}</li>
          </ul>
        </div>

        {/* Column 3 — get in touch */}
        <div>
          <p className="mb-4 font-sans text-[11px] font-light uppercase tracking-[0.15em] text-primary">
            Get in Touch
          </p>
          <ul className="space-y-2 font-serif text-[14px] font-light leading-[1.7] text-muted-foreground">
            <li>
              <a
                href={SITE.phoneHref}
                className="transition-colors duration-200 hover:text-primary"
              >
                {SITE.phone}
              </a>
            </li>
            <li>
              <a
                href={SITE.website}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-primary"
              >
                {SITE.websiteLabel}
              </a>
            </li>
            <li>Order online for pickup & delivery</li>
          </ul>
        </div>
      </div>

      <p className="mt-14 border-t-[0.5px] border-border pt-6 font-sans text-[11px] font-light text-muted-foreground/50">
        © 2026 3CAT Handcrafted Beverage. All rights reserved.
      </p>
    </footer>
  )
}
