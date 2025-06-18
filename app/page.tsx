import Hero from '@/components/Hero'
import TrustLogos from '@/components/TrustLogos'
import Performance from '@/components/Performance'
import Uptime from '@/components/Uptime'
import NodeServices from '@/components/NodeServices'
import Contact from '@/components/Contact'
import Blockchains from '@/components/Blockchains'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustLogos />
      <Performance />
      <Uptime />
      <NodeServices />
      <Contact />
      <Blockchains />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
