import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-secondary-foreground text-lg leading-tight">KAPABLE</span>
                <span className="text-xs text-secondary-foreground/70 leading-tight">SOLUTIONS PVT. LTD.</span>
              </div>
            </div>
            <p className="text-secondary-foreground/70 text-sm max-w-md">
              State-of-the-art scientific testing and consultancy firm delivering accurate, reliable, and data-driven
              insights.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-secondary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#expertise"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  Expertise
                </Link>
              </li>
              <li>
                <Link
                  href="#instruments"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  Instruments
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-secondary-foreground mb-4">Account</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/login"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-center text-secondary-foreground/70 text-sm">
            © {new Date().getFullYear()} Kapable Solutions Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
