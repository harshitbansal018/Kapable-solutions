import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Thermometer, Waves, Eye, Droplet } from "lucide-react"

export function Instruments() {
  const instruments = [
    {
      icon: Thermometer,
      category: "Thermal Series",
      items: ["DSC", "TGA", "TMA"],
    },
    {
      icon: Waves,
      category: "Spectroscopy",
      items: ["FTIR", "Raman", "UV-VIS", "XRD", "XPS"],
    },
    {
      icon: Eye,
      category: "Morphological Analysis",
      items: ["SEM", "FE-SEM", "TEM", "HR-TEM", "Optical Microscope"],
    },
    {
      icon: Droplet,
      category: "Other Advanced",
      items: ["NMR", "Rheometer", "UTM", "Contact Angle", "DLS", "MFI"],
    },
  ]

  return (
    <section id="instruments" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-medium text-primary">Advanced Equipment</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            State-of-the-Art Instruments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            World-class testing capabilities with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instruments.map((instrument, index) => {
            const Icon = instrument.icon
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border hover:border-primary animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{instrument.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {instrument.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
