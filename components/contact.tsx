import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Contact Us</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              If there is anything you need to ask, reach out to us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Email Us</h3>
              <a href="mailto:kapable.solutions@gmail.com" className="text-primary hover:underline">
                kapable.solutions@gmail.com
              </a>
            </div>

            <div className="p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Location</h3>
              <p className="text-muted-foreground">Delhi, India</p>
            </div>
          </div>

          <div className="text-center p-8 bg-primary/5 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Join us today and access comprehensive scientific testing services
            </p>
            <Button size="lg" asChild className="transition-all hover:scale-105">
              <a href="/register">Create Account</a>
            </Button>
          </div>

          <div className="mt-12 p-8 bg-card rounded-2xl border border-border">
            <h3 className="text-2xl font-bold mb-6 text-center">Send us a Query</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" rows={4} />
              </div>
              <div className="text-center">
                <Button type="submit" size="lg" className="transition-all hover:scale-105">
                  Send Query
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
