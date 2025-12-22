import { Building2, Car, Pill, Package, Recycle, Baby, GraduationCap } from "lucide-react"

export function Industries() {
  const industries = [
    { icon: Building2, name: "Polymers & Plastics" },
    { icon: Package, name: "Textiles & Fibres" },
    { icon: Car, name: "Automotive & Aerospace" },
    { icon: Pill, name: "Pharmaceuticals" },
    { icon: Package, name: "Consumer Products" },
    { icon: Recycle, name: "Environment & Waste Management" },
    { icon: Baby, name: "Toy Industry" },
    { icon: GraduationCap, name: "Academic & Research Labs" },
  ]

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Industries</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Industries We Support</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Serving diverse sectors with specialized testing solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:-translate-y-2 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="inline-flex w-14 h-14 bg-primary/10 rounded-full items-center justify-center mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-sm text-foreground">{industry.name}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
