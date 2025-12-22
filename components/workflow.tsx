import { MessageSquare, FlaskConical, FileText, CheckCircle } from "lucide-react"

export function Workflow() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Requirement Discussion",
      description: "Understanding your testing needs",
    },
    {
      icon: FlaskConical,
      title: "Sample Testing & Analysis",
      description: "Advanced testing with precision",
    },
    {
      icon: FileText,
      title: "Consultancy & Recommendations",
      description: "Expert insights and guidance",
    },
    {
      icon: CheckCircle,
      title: "Final Report Delivery",
      description: "Comprehensive data interpretation",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Our Process</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-secondary-foreground mb-4 text-balance">
            Simple & Efficient Workflow
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto text-pretty">
            From initial consultation to final report delivery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="text-center">
                  <div className="inline-flex w-16 h-16 bg-primary rounded-full items-center justify-center mb-4 hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-primary/20 -z-10 hidden lg:block last:hidden"></div>
                  <h3 className="text-xl font-bold text-secondary-foreground mb-2">{step.title}</h3>
                  <p className="text-secondary-foreground/70 text-sm">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
