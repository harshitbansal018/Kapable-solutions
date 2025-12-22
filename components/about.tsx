import { CheckCircle2 } from "lucide-react"

export function About() {
  const features = [
    "Clear, well-interpreted reports",
    "Fast & dependable results",
    "Detailed data interpretation",
    "Data to decision support",
    "Smooth & fast process",
    "Zero compromise on quality",
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Scientific Excellence, Delivered
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              We are a state-of-the-art scientific testing and consultancy firm delivering accurate, reliable, and
              data-driven insights. We have tie-ups with different labs from all over the world for advanced testing.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Our experts support industries, research institutions, and product development teams through advanced
              testing and analytical consultancy.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">What Makes Us Different?</h3>
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-md animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
