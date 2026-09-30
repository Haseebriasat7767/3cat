import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MenuRegions from '@/components/MenuRegions'
import CraftSplit from '@/components/CraftSplit'
import HouseFavorites from '@/components/HouseFavorites'
import Catering from '@/components/Catering'
import Testimonial from '@/components/Testimonial'
import OrderCta from '@/components/OrderCta'
import Footer from '@/components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <MenuRegions />
        <CraftSplit />
        <HouseFavorites />
        <Catering />
        <Testimonial />
        <OrderCta />
      </main>
      <Footer />
    </div>
  )
}
