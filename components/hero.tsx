import { Button } from "@/components/ui/button"
import { ArrowRight, Beaker, Microscope, FlaskConical } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary py-20 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Scientific Excellence</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-secondary-foreground leading-tight text-balance">
              Turning Data Into Decisions
            </h1>
            <p className="text-lg text-secondary-foreground/80 leading-relaxed text-pretty max-w-xl">
              State-of-the-art scientific testing and consultancy firm delivering accurate, reliable, and data-driven
              insights for industries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="group transition-all hover:scale-105">
                <Link href="#contact">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-card transition-all hover:scale-105">
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-4 lg:gap-6">
            <div className="space-y-4 lg:space-y-6 pt-8">
              <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Microscope className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Advanced Testing</h3>
                <p className="text-sm text-muted-foreground">State-of-the-art instruments</p>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <FlaskConical className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Expert Analysis</h3>
                <p className="text-sm text-muted-foreground">Data-driven insights</p>
              </div>
            </div>
            <div className="space-y-4 lg:space-y-6">
              <div className="bg-card p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <Beaker className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Fast Results</h3>
                <p className="text-sm text-muted-foreground">Quick turnaround time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
