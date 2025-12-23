import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Expertise } from "@/components/expertise"
import { Instruments } from "@/components/instruments"
import { Industries } from "@/components/industries"
import { Workflow } from "@/components/workflow"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Instruments />
        <Workflow />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
