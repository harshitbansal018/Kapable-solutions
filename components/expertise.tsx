import { Card, CardContent } from "@/components/ui/card"
import { Layers, Shirt, Atom, Zap, Cog, LineChart } from "lucide-react"

export function Expertise() {
  const expertiseAreas = [
    {
      icon: Layers,
      title: "Polymers / Plastics",
      description: "Advanced polymer characterization and analysis",
    },
    {
      icon: Shirt,
      title: "Textiles",
      description: "Fibre science & technology testing",
    },
    {
      icon: Atom,
      title: "Nanotechnology",
      description: "Nano-finishing & synthesis of nanomaterials",
    },
    {
      icon: Zap,
      title: "Plasma Technology",
      description: "Surface modification and treatment",
    },
    {
      icon: Cog,
      title: "Reverse Engineering",
      description: "Product analysis and replication",
    },
    {
      icon: LineChart,
      title: "Data Interpretation",
      description: "Detailed analysis and insights",
    },
  ]

  return (
    <section id="expertise" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Our Expertise</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Areas of Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive testing and consultancy across multiple scientific domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border hover:border-primary animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{area.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
